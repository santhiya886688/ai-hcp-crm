from fastapi import APIRouter
from pydantic import BaseModel

from langgraph.agent import graph

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(request: ChatRequest):

    result = graph.invoke(
        {
            "user_input": request.message
        }
    )

    return result