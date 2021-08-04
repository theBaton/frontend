from flask import jsonify, request, make_response, Blueprint, g, redirect, render_template
#from ..models.UserModel import User
#from ..models import db
import os
import uuid
import datetime
from urllib.parse import urlencode

user_api = Blueprint('user_api', __name__)

@user_api.route('/articles', methods=['GET'])
def articles():
    return render_template('articles.html')

@user_api.route('/login')
def login():
    return render_template('login.html')

@user_api.route('login', methods=['POST'])
def login_user():
    return 0

