from beanie import Document, Indexed
from beanie.odm.fields import PydanticObjectId
from pydantic import BaseModel
from typing import List, Union


class PoemPage(BaseModel):
    type: str = "poem"
    id: PydanticObjectId


class FreePage(BaseModel):
    type: str = "free"
    content: str


class Book(Document):
    """Book DB representation"""

    letter: str
    flower_id: PydanticObjectId
    contents: List[Union[PoemPage, FreePage]]


class Flower(Document):
    """Flower DB representation"""

    name: str
    symbol: str
    keywords: List[str]


class Poem(Document):
    """Poem DB representation"""

    author: str
    content: str
    keywords: List[str]
