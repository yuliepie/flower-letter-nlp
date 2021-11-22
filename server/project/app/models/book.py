from beanie import Document, Indexed
from beanie.odm.fields import PydanticObjectId
from pydantic import BaseModel
from typing import List, Union


class Flower(BaseModel):
    name: str
    symbol: str
    image_url: str


class FlowerModel(Document, Flower):
    """Flower DB representation"""

    keywords: List[str]

    class Collection:
        name = "flowers"


class Poem(BaseModel):
    title: str
    author: str
    content: str
    keywords: List[str]


class PoemModel(Document, Poem):
    """Poem DB representation"""

    class Collection:
        name = "poems"


class Letter(BaseModel):
    content: str


class PoemFlowerList(BaseModel):
    poems: List[Poem]
    flowers: List[Flower]


class PoemPage(BaseModel):
    type: str = "poem"
    id: PydanticObjectId


class FreePage(BaseModel):
    type: str = "free"
    content: str


class Book(BaseModel):
    letter: str
    flower_id: PydanticObjectId
    contents: List[Union[PoemPage, FreePage]]


class BookModel(Document, Book):
    """Book DB representation"""

    class Collection:
        name = "books"
