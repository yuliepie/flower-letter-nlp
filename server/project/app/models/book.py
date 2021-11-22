from typing_extensions import Required
from beanie import Document, Indexed
from beanie.odm.fields import PydanticObjectId
from pydantic import BaseModel, Field
from typing import List, Union, Literal


class FlowerModel(Document):
    """Flower DB representation"""

    name: str
    symbol: str
    image_url: str
    keywords: List[str]

    class Collection:
        name = "flowers"


class Flower(FlowerModel):
    pass


class PoemModel(Document):
    """Poem DB representation"""

    title: str
    author: str
    content: str
    keywords: List[str]

    class Collection:
        name = "poems"


class Poem(PoemModel):
    pass


class Letter(BaseModel):
    content: str


class PoemFlowerList(BaseModel):
    poems: List[Poem] = []
    flowers: List[Flower] = []


class PoemPage(BaseModel):
    type: str = Field("poem", const=True)
    poem_id: str


class PoemPageModel(PoemPage):
    poem_id: PydanticObjectId


class FreePage(BaseModel):
    type: str = Field("text", const=True)
    text_content: str


class Book(BaseModel):
    letter: str
    flower_id: str
    contents: List[Union[PoemPage, FreePage]]


class BookModel(Document, Book):
    """Book DB representation"""

    flower_id: PydanticObjectId
    contents: List[Union[PoemPageModel, FreePage]]

    class Collection:
        name = "books"


class OrderDetail(BaseModel):
    price: float
    name: str
    address: str
    email: str
    phone: str


class Order(BaseModel):
    order: OrderDetail
    book: Book
