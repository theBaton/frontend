from flask import Flask,render_template
from flask_jwt_extended import JWTManager

from .config import app_config
#from .models import db

def create_app(env_name):
    app = Flask(__name__)
    
    app.config.from_object(app_config[env_name])

    #db.init_app(app)
    jwt = JWTManager(app)

    @app.route('/', methods=['GET'])
    def index():
        return render_template('index.html')
    
    return app