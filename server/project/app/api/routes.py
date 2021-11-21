from fastapi import APIRouter, Depends, status, HTTPException
from app import models, schemas, db
from sqlalchemy.orm import Session
from app.crud import get_blogs, create_blog

router = APIRouter(prefix="/api", tags=["Routes"])

get_db = db.get_db


@router.get("/")
async def root(db: Session = Depends(get_db)):
    return get_blogs(db)


@router.post("/")
async def create(request: schemas.Blog, db: Session = Depends(get_db)):
    return create_blog(request, db)
