from langchain_core.tools import tool

@tool
def edit_interaction(
    interaction_id: str,
    updated_notes: str,
):
    """
    Edit an existing interaction.
    """

    return {
        "status": "success",
        "message": f"Interaction {interaction_id} updated successfully.",
        "updated_notes": updated_notes,
    }