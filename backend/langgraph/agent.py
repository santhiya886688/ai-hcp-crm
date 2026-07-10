from typing import TypedDict

from langgraph.graph import StateGraph, END

from tools.log_interaction import log_interaction
from tools.edit_interaction import edit_interaction
from tools.search_hcp import search_hcp
from tools.history import interaction_history
from tools.followup import follow_up_suggestion


class AgentState(TypedDict):
    user_input: str
    response: str


def router(state: AgentState):

    text = state["user_input"].lower()

    if "edit" in text:

        result = edit_interaction.invoke(
            {
                "interaction_id": "1",
                "updated_notes": text,
            }
        )

    elif "history" in text:

        result = interaction_history.invoke(
            {
                "doctor_name": "Dr Ravi",
            }
        )

    elif "search" in text:

        result = search_hcp.invoke(
            {
                "name": "Dr Ravi",
            }
        )

    elif "follow" in text:

        result = follow_up_suggestion.invoke(
            {
                "notes": text,
            }
        )

    else:

        result = log_interaction.invoke(
            {
                "doctor_name": "Dr Ravi",
                "hospital": "Apollo",
                "interaction_type": "Visit",
                "discussion": text,
                "products_discussed": "Diabetes Medicine",
                "follow_up_date": "2026-07-20",
            }
        )

    return {

        "response": str(result)

    }


builder = StateGraph(AgentState)

builder.add_node("router", router)

builder.set_entry_point("router")

builder.add_edge("router", END)

graph = builder.compile()