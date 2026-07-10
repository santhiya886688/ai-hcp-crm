from pydantic import BaseModel

class Interaction(BaseModel):
    doctor_name: str
    hospital: str
    interaction_type: str
    products_discussed: str
    discussion: str
    follow_up_date: str