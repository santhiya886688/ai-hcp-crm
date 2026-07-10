from fastapi import APIRouter
from schemas.interaction import Interaction

router = APIRouter()

interactions = []

@router.post("/log-interaction")
def log_interaction(data: Interaction):
    interactions.append(data.dict())

    return {
        "message": "Interaction Logged Successfully",
        "data": data
    }


@router.get("/interactions")
def get_interactions():
    return interactions