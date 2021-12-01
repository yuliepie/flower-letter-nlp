from beanie.odm.fields import PydanticObjectId
from fastapi import APIRouter, Depends, status, HTTPException, BackgroundTasks
from fastapi_mail import FastMail, MessageSchema

from config import CONFIG


from models.book import (
    Poem,
    PoemModel,
    PoemPageModel,
    Letter,
    FlowerModel,
    PoemFlowerList,
    BookModel,
)
from models.order import OrderIn, OrderOut, create_order
import db
from sqlalchemy.orm import Session

router = APIRouter(prefix="/api", tags=["Routes"])

get_db = db.get_db


@router.post("/poems", response_model=Poem)
async def create_poem(request: Poem):
    poem = PoemModel(**request.dict())
    return await poem.create()


@router.get("/results", response_model=PoemFlowerList)
async def get_analyzed_results(request: Letter):
    fake_model_results = ["사랑", "결혼", "고백", "낭만", "남편"]

    # 모델 API에서 편지 키워드 불러오기
    keywords = fake_model_results

    results = PoemFlowerList()

    poem_list = []
    flower_list = []

    # TODO: 랜덤으로 가져올 것.
    for keyword in keywords:
        # 키워드별로 시 100개 가져오기
        keyword_poems = (
            await PoemModel.find(keyword in PoemModel.keywords).limit(100).to_list()
        )
        poem_list += keyword_poems

        # 키워드별로 꽃말 5개 가져오기
        keyword_flowers = (
            await FlowerModel.find(keyword in FlowerModel.keywords).limit(5).to_list()
        )
        flower_list += keyword_flowers

    results.poems = poem_list
    results.flowers = flower_list
    return results


@router.post("/orders", response_model=OrderOut)
async def post_order(
    background_tasks: BackgroundTasks, request: OrderIn, db: Session = Depends(get_db)
):
    new_contents = []
    for req_content in request.book.contents:
        if req_content.type == "poem":
            poem = PoemPageModel(poem_id=PydanticObjectId(req_content.poem_id))
            new_contents.append(poem)
        else:
            new_contents.append(req_content)

    new_book = BookModel(
        letter=request.book.letter,
        flower_id=PydanticObjectId(request.book.flower_id),
        contents=new_contents,
    )

    await new_book.create()
    new_order = await create_order(request.order, new_book.id, db)

    # 주문확인 이메일 전송
    background_tasks.add_task(send_email, email="yuliekorea@gmail.com")

    return new_order


async def send_email(email: str):
    # TODO: 예쁜 이메일 템플릿 만들기

    html = """
    <b>주문이 완료되었습니다.</b> 
    <p>주문이 완료되었습니다!!</p> 
    """
    message = MessageSchema(
        subject="주문이 완료되었습니다~~~",
        recipients=[email],  # List of recipients
        body=html,
        subtype="html",
    )

    fm = FastMail(CONFIG.email_config)
    await fm.send_message(message)
    print("email sent successfully.")
