from langchain_core.tools import tool

@tool
def search_hcp(name: str):
    """
    Search Healthcare Professional.
    """

    return {
        "doctor": name,
        "hospital": "Apollo Hospital",
        "specialization": "Cardiology",
    }