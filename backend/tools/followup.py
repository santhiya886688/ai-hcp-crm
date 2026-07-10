from langchain_core.tools import tool

@tool
def follow_up_suggestion(notes: str):
    """
    Suggest follow-up action.
    """

    return {
        "suggestion": "Schedule another meeting within 7 days."
    }