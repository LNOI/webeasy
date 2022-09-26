from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi

from sqlalchemy import create_engine

from src.utils.load_method.load_utils import register_load_method
from src.utils.load_method.common_resource import load_json


@register_load_method
def fastapi_app() -> FastAPI:
    app = FastAPI(
        title="Internal tool",
        description="FastAPI server for Account Interaction.",
        version="1.0.0"
    )

    def custom_openapi():
        if app.openapi_schema:
            return app.openapi_schema

        openapi_schema = get_openapi(
            title="Internal tool",
            version="1.0.0",
            description="FastAPI server for Account Interaction.",
            routes=app.routes,
        )
        app.openapi_schema = openapi_schema
        return app.openapi_schema
    app.openapi = custom_openapi

    return app



