from sqlalchemy.orm import Session
from models import order
from models import schemas
from fastapi import HTTPException, status


def get_blogs(db: Session):
    blogs = db.query(order.Blog).all()
    return blogs


def create_blog(request: schemas.Blog, db: Session):
    new_blog = order.Blog(**request.dict())
    db.add(new_blog)
    db.commit()
    db.refresh(new_blog)
    return new_blog
