from langchain_core.tools import tool

@tool
def log_interaction(
    doctor_name: str,
    hospital: str,
    interaction_type: str,
    discussion: str,
    products_discussed: str,
    follow_up_date: str,
):
    """
    Log an interaction with a Healthcare Professional.
    """

    interaction = {
        "doctor_name": doctor_name,
        "hospital": hospital,
        "interaction_type": interaction_type,
        "discussion": discussion,
        "products_discussed": products_discussed,
        "follow_up_date": follow_up_date,
    }

    return {
        "status": "success",
        "message": "Interaction Logged Successfully",
        "interaction": interaction,
    }