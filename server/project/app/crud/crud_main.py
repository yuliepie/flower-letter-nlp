from sqlalchemy.orm import Session
from app import models, schemas
from fastapi import HTTPException, status


def get_blogs(db: Session):
    blogs = db.query(models.Blog).all()
    return blogs


def create_blog(request: schemas.Blog, db: Session):
    new_blog = models.Blog(**request.dict())
    db.add(new_blog)
    db.commit()
    db.refresh(new_blog)
    return new_blog
