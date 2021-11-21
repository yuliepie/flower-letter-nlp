from sqlalchemy import Column, Integer, String, ForeignKey
from app.db import Base
from sqlalchemy.orm import relationship


class Blog(Base):
    __tablename__ = "blogs"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(50))
    body = Column(String(255))
