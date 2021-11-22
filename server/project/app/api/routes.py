from fastapi import APIRouter, Depends, status, HTTPException
from models import schemas
from models.book import ShowPoem, Poem
import db
from sqlalchemy.orm import Session
from crud import crud_main

router = APIRouter(prefix="/api", tags=["Routes"])

get_db = db.get_db


@router.get("/")
async def root(db: Session = Depends(get_db)):
    return crud_main.get_blogs(db)


@router.post("/")
async def create(request: schemas.Blog, db: Session = Depends(get_db)):
    return crud_main.create_blog(request, db)


@router.post("/poems", response_model=ShowPoem)
async def create_poem(request: ShowPoem):
    poem = Poem(**request.dict())
    return await poem.create()
