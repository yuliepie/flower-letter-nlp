from typing_extensions import Required
from beanie import Document, Indexed
from beanie.odm.fields import PydanticObjectId
from pydantic import BaseModel, Field
from typing import List, Union, Literal

# =================
# Poem & Flower
# =================


class FlowerModel(Document):
    """Flower DB representation"""

    flower: str
    symbol: str
    image_url: str
    keywords: List[str]

    class Collection:
        name = "flowers"


class PoemIn(BaseModel):
    title: str
    author: str
    content: str
    keywords: List[str]


class PoemModel(PoemIn, Document):
    """Poem DB representation"""

    class Collection:
        name = "poems"


class Letter(BaseModel):
    letter_content: str


# For returning analyzed results
class PoemFlowerList(BaseModel):
    keywords: List[str] = []
    poems: List[PoemModel] = []
    flowers: List[FlowerModel] = []


# =================
# Book Order
# =================
class PoemPage(BaseModel):
    type: str = Field("poem", const=True)
    poem_id: str


class PoemPageModel(PoemPage):
    poem_id: PydanticObjectId


class FreePage(BaseModel):
    type: str = Field("text", const=True)
    text_content: str


# For OrderIn Schema
class Book(BaseModel):
    title: str
    letter: str
    flower_id: str
    contents: List[Union[PoemPage, FreePage]]
    font: str
    color: str

    class Config:
        schema_extra = {
            "example": {
                "title": "너에게 보내는 시집",
                "letter": "편지 내용...",
                "flower_id": "61b065c6dd874c208dee0bc3",
                "contents": [
                    {"type": "poem", "poem_id": "61b065c6dd874c208dee0bc3"},
                    {"type": "poem", "poem_id": "61b066202f194ac7dd807aef"},
                    {"type": "text", "text_content": "자유글 내용..."},
                    {"type": "text", "text_content": "자유글 내용 222..."},
                ],
                "font": "바른글씨체",
                "color": "beige",
            },
        }


# For saving ordered book to DB
class BookModel(Document, Book):
    """Book DB representation"""

    flower_id: PydanticObjectId
    contents: List[Union[PoemPageModel, FreePage]]

    class Collection:
        name = "books"
