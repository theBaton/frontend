from flask_jwt_extended import JWTManager

jwt = JWTManager()

from .UserView import user_api
from .BlogpostView import blogpost_api