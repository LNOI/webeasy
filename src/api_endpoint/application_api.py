from http.client import HTTPResponse
import logging
from typing import Any


from h11 import Data
from src.const.global_map import RESOURCE_MAP
from src.api_endpoint.add_api import api_log, api_log_aischema_no_response_content
from src.utils.basemodel import app_schemas as schemas
from src.utils.basemodel.response_schemas import create_response, ResponseModel
from src.execute_query.utils import *
from src.execute_query.utils import html_response_from_dict, html_response_str
from src.utils.load_method.model_resource import init_db_engine
from fastapi.templating import Jinja2Templates
from fastapi import Request,  Form
from fastapi.responses import HTMLResponse
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.responses import RedirectResponse

app_logger = logging.getLogger("app_logger")

app = RESOURCE_MAP["fastapi_app"]

templates = Jinja2Templates(directory='src/templates/')


@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse('general_pages/main.html', context={'request': request})

@app.post("/sync_data")
async def data(request: Request):
    query = """
        select * from users
    """
    res = execute_raw_query(RESOURCE_MAP["db_engine"],raw_query=query)
    return res
