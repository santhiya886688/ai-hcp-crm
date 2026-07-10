from langchain_core.tools import tool

@tool
def interaction_history(doctor_name: str):
    """
    Get interaction history.
    """

    return {
        "doctor": doctor_name,
        "history": [
            "Met regarding diabetes products.",
            "Follow-up scheduled next week.",
        ],
    }