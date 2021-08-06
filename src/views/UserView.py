from flask import jsonify, request, make_response, Blueprint, flash, redirect, render_template, url_for
from ..models.UserModel import User
from ..models import db
import os
import uuid
import datetime
from urllib.parse import urlencode
from .forms import RegistrationForm, LoginForm
from . import jwt
from flask_jwt_extended import create_access_token, jwt_required, set_access_cookies, unset_jwt_cookies
from werkzeug.security import generate_password_hash, check_password_hash

user_api = Blueprint('user_api', __name__)




@user_api.route("/")
@user_api.route("/index")
def index():
    return render_template('index.html')


@user_api.route("/about")
def about():
    return render_template('about.html', title='About')


@user_api.route("/register", methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = generate_password_hash(form.password.data, method='sha256')

        user = User(
            public_id = str(uuid.uuid4()),
            email = form.email.data, 
            password = hashed_password,
            role='superadmin'
            )

        db.session.add(user)
        db.session.commit()

        flash(f'Your account has been created!', 'success')
        return redirect(url_for('user_api.index'))
    return render_template('register.html', form=form)


@user_api.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():

        user = User.query.filter_by(email=form.email.data).first()
        if user:
            if check_password_hash(user.password, form.password.data):

                roles_list = user.roles.split("+")

                additional_claims = {
                    "name" : user.name,
                    "email" : user.email,
                    "email_verified" : user.email_verified,
                    "image_file" : user.image_file,
                    "roles" : roles_list 
                }

                response = jsonify({"msg": "login successful"})
                access_token = create_access_token(identity=user.public_id, additional_claims=additional_claims)
                set_access_cookies(response, access_token, max_age=86400)
                flash('You have been logged in!', 'success')
                
                return redirect(url_for('user_api.index'))

            flash('Login Unsuccessful. Please check your password', 'danger')

        flash('User does not exist. Please register.', 'danger')

    return render_template('login.html', form=form)

@user_api.route("/logout", methods=['GET', 'POST'])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    flash('You have been logged out!', 'success')
    return redirect(url_for('user_api.index'))

@user_api.route('/articles', methods=['GET'])
def articles():
    return render_template('articles.html')

