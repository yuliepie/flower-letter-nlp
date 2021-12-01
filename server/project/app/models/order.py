from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.sql.expression import null
from datetime import datetime
from db import Base
from sqlalchemy.orm import relationship, Session
from models.book import OrderDetail


class Blog(Base):
    __tablename__ = "blogs"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(50))
    body = Column(String(255))


class Order(Base):
    """
    주문서.

    Attributes:
        * id (int): PK.
        * order_status (int): 주문 상태. FK --> OrderStatus
        * order_date (datetime): 주문 날짜.
        * price (float): 결제 금액.
        * address (str): 배송 주소.
        * email (str): 주문자 이메일.
        * phone (str): 주문자 전화번호.
        * book_id (str): 생성된 시집의 ObejctId.
    """

    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    order_status = Column(Integer, ForeignKey("order_status.id"), nullable=False)
    order_date = Column(DateTime, nullable=False)
    price = Column(Float, nullable=False)
    name = Column(String(10))
    address = Column(String(255), nullable=False)
    email = Column(String(50), nullable=False)
    phone = Column(String(20))
    book_id = Column(String(24), nullable=False)


class OrderStatus(Base):
    """
    주문상태.

    Attributes:
        * id (int): PK
        * status_name (str): 상태 이름
    """

    __tablename__ = "order_status"

    id = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    status_name = Column(String(10), nullable=False)
    orders = relationship("Order", backref="status", lazy=True)


# ===========
# CRUD
# ===========


def create_order(order: OrderDetail, book_id: str, db: Session):
    new_order = Order(**order.dict())
    new_order.order_status = 1  # 결제완료 상태
    new_order.order_date = datetime.now()
    new_order.book_id = book_id

    db.add(new_order)
    db.commit()
    db.refresh(new_order)
    return new_order
