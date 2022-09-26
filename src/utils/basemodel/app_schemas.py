from typing import Optional

from pydantic import BaseModel


class AISchema1(BaseModel):
    session: str
    sss_id: str
    reason: str

class AISchema2(BaseModel):
    session: str
    sss_id: str
    reason: str
    day_duration: int

class AISchema3(BaseModel):
    session: str
    sss_id: str
    biz_account : bool
    account_level_id: int