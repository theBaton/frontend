from flask import Flask
from .config import app_config
from .views.UserView import user_api

def create_app(env_name):
    app = Flask(__name__)

    app.config.from_object(app_config[env_name])

    app.register_blueprint(user_api)

    return app