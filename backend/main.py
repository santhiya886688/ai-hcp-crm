from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.interaction import router
from routers.agent import router as agent_router

app = FastAPI(title="AI First CRM")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
app.include_router(agent_router)

@app.get("/")
def home():
    return {"message":"Backend Running"}