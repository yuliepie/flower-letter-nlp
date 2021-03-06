from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.future import select
from datetime import datetime, date
from app.db import Base
from sqlalchemy.orm import joinedload, relationship
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.book import Book
from pydantic import BaseModel
from typing import List


class OrderModel(Base):
    """
    주문서.

    Attributes:
        * id (int): PK.
        * order_status (int): 주문 상태. FK --> OrderStatus
        * order_date (datetime): 주문 날짜.
        * price (float): 결제 금액.
        * address (str): 배송 주소.
        * delivery_name (str): 받는 분 이름
        * post_code (str): 우편번호
        * delivery_memo (str): 배송메모
        * email (str): 주문자 이메일.
        * phone (str): 주문자 전화번호.
        * book_id (str): 생성된 시집의 ObejctId.
    """

    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    order_status = Column(Integer, ForeignKey("order_status.id"), nullable=False)
    order_date = Column(DateTime, nullable=False)
    price = Column(Float, nullable=False)
    name = Column(String(10), nullable=False)
    delivery_name = Column(String(10), nullable=False)
    address = Column(String(255), nullable=False)
    post_code = Column(String(10), nullable=False)
    delivery_memo = Column(String(30), nullable=True)
    email = Column(String(50), nullable=False)
    phone = Column(String(20))
    book_id = Column(String(24), nullable=False)

    def __init__(
        self,
        price,
        name,
        delivery_name,
        post_code,
        delivery_memo,
        address,
        email,
        phone,
        book_id,
    ) -> None:
        self.order_date = datetime.now()
        self.order_status = 1  # 결제대기 상태로 생성
        self.price = price
        self.name = name
        self.delivery_name = delivery_name
        self.post_code = post_code
        self.delivery_memo = delivery_memo
        self.address = address
        self.email = email
        self.phone = phone
        self.book_id = book_id


class OrderStatusModel(Base):
    """
    주문상태.

    Attributes:
        * id (int): PK
        * status_name (str): 상태 이름
    """

    __tablename__ = "order_status"

    id = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    status_name = Column(String(10), nullable=False)
    orders = relationship("OrderModel", backref="status", lazy=True)


# ===============
# SCHEMAS
# ===============
class OrderDetail(BaseModel):
    price: float
    name: str
    delivery_name: str
    address: str
    post_code: str
    delivery_memo: str
    email: str
    phone: str

    class Config:
        schema_extra = {
            "example": {
                "price": 47000,
                "name": "김철수",
                "delivery_name": "이영희",
                "address": "서울시 강남구 강남동 11번지",
                "post_code": "10101",
                "delivery_memo": "부재시 경비실에 맡겨주세요.",
                "email": "test@test.com",
                "phone": "01012341234",
            }
        }


class OrderIn(BaseModel):
    order: OrderDetail
    book: Book


class OrderOut(OrderDetail):
    id: int
    order_date: date
    order_status: int

    class Config:
        orm_mode = True


# ===========
# CRUD
# ===========


async def create_order(
    order: OrderDetail, book_id: str, db: AsyncSession
) -> OrderModel:
    new_order = OrderModel(**order.dict(), book_id=book_id)

    db.add(new_order)
    await db.commit()
    await db.refresh(new_order)
    return new_order


async def get_order(order_id: int, db: AsyncSession) -> OrderModel:
    return await db.get(OrderModel, order_id)


async def order_get_all(db: AsyncSession):
    query = select(OrderModel, OrderStatusModel).join(OrderStatusModel)
    result = await db.execute(query)
    all_orders = result.fetchall()
    return_result = []
    for order, order_status in all_orders:
        return_result.append(
            {
                "id": order.id,
                "name": order.name,
                "order_date": order.order_date.date(),
                "address": order.address,
                "delivery_memo": order.delivery_memo,
                "phone": order.phone,
                "price": order.price,
                "order_status": order_status.status_name,
                "delivery_name": order.delivery_name,
                "post_code": order.post_code,
                "email": order.email,
                "book_id": order.book_id,
            }
        )
        print(order_status.status_name)
    return return_result


async def update_order_status(
    order_id: int, db: AsyncSession, status: int
) -> OrderModel:
    order = await db.get(OrderModel, order_id)
    order.order_status = status

    await db.commit()
    await db.refresh(order)
    return order
