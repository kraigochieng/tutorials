from enum import Enum
from fastapi import FastAPI, Query
from pydantic import BaseModel
from typing import Union, Annotated

app = FastAPI()


@app.get("/")
async def root():
    return {
        "message": "Hello World"
    }


@app.get("/items/")
async def get_items(skip: int = 0, limit: int = 10, q: Annotated[Union[str, None], Query(max_length=50)] = None):
    return f"skip: {str(skip)}, limit: {str(limit)}, q: {q}"


@app.get("/items/{item_id}")
async def get_item(item_id: int):
    return {
        "item_id": item_id
    }


class Item(BaseModel):
    name: str
    description: Union[str, None] = None
    price: float


@app.post("/items/")
async def post_item(item: Item):
    return item


@app.get("/users/me")
async def get_user_me():
    return "current user"


@app.get("/users/{user_id}")
async def get_user(user_id: str):
    return f"user id is {user_id}"


class Letters(str, Enum):
    a = "a"
    b = "b"
    c = "c"


@app.get("/letters/{letter}")
async def get_letter(letter: Letters):
    if letter is Letters.a:
        return "apple"
    elif letter is Letters.b:
        return "banana"
    elif letter is Letters.c:
        return "cinnamon"


@app.get("/files/{file_path:path}")
async def read_file(file_path: str):
    return {"file_path": file_path}
