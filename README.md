# AI HCP CRM

An AI-powered Healthcare Professional (HCP) CRM application built using React, FastAPI, and LangGraph.

## Project Overview

AI HCP CRM is an intelligent CRM assistant that helps users manage healthcare professional interactions using an AI agent.

The application allows users to interact with an AI chatbot that can understand user requests and perform CRM operations using LangGraph tools.

The project contains:

* React frontend for user interaction
* FastAPI backend for API handling
* LangGraph agent for AI workflow management
* Custom tools for CRM operations

## Tech Stack

### Frontend

* React.js
* JavaScript
* Axios

### Backend

* Python
* FastAPI
* LangGraph
* LangChain
* Pydantic

## Project Structure

```
ai-hcp-crm

├── frontend
│   └── React application

├── backend
│   ├── app
│   │   ├── main.py
│   │   ├── agent.py
│   │   └── tools.py
│   │
│   └── requirements.txt

└── README.md
```

## Features

* AI Chat Assistant
* HCP information search
* Doctor interaction logging
* Product information retrieval
* Follow-up reminder management
* CRM data retrieval
* LangGraph tool-based workflow

## LangGraph Tools

The AI agent uses the following tools:

### 1. HCP Search Tool

Used to search healthcare professional details based on user requests.

### 2. Interaction Logging Tool

Used to store doctor interaction details including discussion and follow-up information.

### 3. Product Information Tool

Provides product-related information requested by users.

### 4. Follow-up Reminder Tool

Helps users track upcoming follow-up activities.

### 5. CRM Data Retrieval Tool

Retrieves previous CRM interaction records.

## How to Run the Project

## Backend Setup

Navigate to backend folder:

```
cd backend
```

Install required packages:

```
pip install -r requirements.txt
```

Run FastAPI server:

```
uvicorn app.main:app --reload
```

## Frontend Setup

Navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start React application:

```
npm start
```

## Environment Variables

Create a `.env` file inside the backend folder and add required API keys.

Example:

```
OPENAI_API_KEY=your_api_key_here
```

## Working Flow

1. User enters a query through the React frontend.
2. Frontend sends the request to FastAPI backend.
3. LangGraph agent analyzes the user request.
4. Agent selects the required tool.
5. Tool executes the CRM operation.
6. Response is returned to the frontend.

## Learning Outcome

Through this project, I understood how to build an AI agent application using LangGraph and connect multiple tools to automate CRM workflows.

This project demonstrates how AI agents can improve business processes by reducing manual tasks and providing intelligent assistance.

## Conclusion

AI HCP CRM combines modern web technologies and AI agent workflows to create an efficient CRM assistant for healthcare professional management.
