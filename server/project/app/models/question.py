from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime,
    Boolean,
    Text,
)
from datetime import datetime, date
from sqlalchemy.sql.expression import true

from sqlalchemy.sql.sqltypes import Boolean
from sqlalchemy.future import select

from app.db import Base
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel
from typing import List


class QuestionModel(Base):
    """
    주문서.

    Attributes:
        * id (int): PK.
        * date (datetime): 문의 날짜
        * email (str): 문의자 이메일
        * name (str): 문의자 이름
        * phone (str): 문의자 전화번호
        * title (str): 문의 제목
        * content (text): 문의 내용
        * answered (bool): 답변완료 여부
    """

    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    date = Column(DateTime, nullable=False)
    answered = Column(Boolean, nullable=False)
    name = Column(String(20), nullable=False)
    email = Column(String(50), nullable=False)
    title = Column(String(30), nullable=False)
    content = Column(Text, nullable=False)

    def __init__(self, name, email, title, content) -> None:
        self.name = name
        self.email = email
        self.title = title
        self.content = content
        self.answered = False
        self.date = datetime.now()


# ===============
# SCHEMAS
# ===============
class Question(BaseModel):
    name: str
    email: str
    title: str
    content: str

    class Config:
        schema_extra = {
            "example": {
                "name": "김영희",
                "email": "test@test.com",
                "title": "배송관련 문의",
                "content": "안녕하세요 배송관련 문의드려요. 보통 얼마나 걸리나요?",
            }
        }


class QuestionOut(BaseModel):
    id: int
    name: str
    email: str
    title: str
    content: str
    answered: str
    date: date

    class Config:
        orm_mode = True


class QuestionAnswer(BaseModel):
    inquiry_id: int
    reply: str


# ===========
# CRUD
# ===========


async def create_question(question: Question, db: AsyncSession) -> QuestionModel:
    new_question = QuestionModel(
        question.name, question.email, question.title, question.content
    )

    db.add(new_question)
    await db.commit()
    await db.refresh(new_question)
    return new_question


async def read_all_questions(db: AsyncSession) -> List[QuestionModel]:
    query = select(QuestionModel)
    result = await db.execute(query)
    all_questions = result.scalars().all()
    return all_questions


async def read_question_by_id(question_id: int, db: AsyncSession) -> QuestionModel:
    return await db.get(QuestionModel, question_id)


async def update_question_status(question_id: int, db: AsyncSession) -> QuestionModel:
    question = await db.get(QuestionModel, question_id)
    question.answered = True

    await db.commit()
    await db.refresh(question)
    return question
