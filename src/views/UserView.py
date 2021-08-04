from flask import jsonify, request, make_response, Blueprint, flash, redirect, render_template, url_for
from ..models.UserModel import User
from ..models import db
import os
import uuid
import datetime
from urllib.parse import urlencode
from .forms import RegistrationForm, LoginForm

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
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('index'))
    return render_template('register.html', title='Register', form=form)


@user_api.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash('You have been logged in!', 'success')
            return redirect(url_for('index'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template('login.html', title='Login', form=form)




@user_api.route('/articles', methods=['GET'])
def articles():
    return render_template('articles.html')

