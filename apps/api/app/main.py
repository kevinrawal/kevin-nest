from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import health

app = FastAPI(title="Kevin's Nest API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://your-vercel-domain.vercel.app"],  # Update with actual Vercel domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)