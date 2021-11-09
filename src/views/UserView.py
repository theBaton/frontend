from flask import app, render_template, request, redirect, url_for, flash, Blueprint, make_response, jsonify
import os

from requests.sessions import session
from .forms import LoginForm, RegisterForm, ContactForm
from datetime import datetime, timedelta, timezone
import requests

#import blueprint
user_api = Blueprint('user_api', __name__, template_folder='templates')

#getheaders function
def getheaders():
    r = requests.get('https://admin.thebaton.in/')
    try:
        cookie = r.cookies['access-token']
    except KeyError:
        cookie = None
    if cookie:
        headers = {
            'Authorization': 'Bearer ' + cookie,
            'Content-Type': 'application/json'
        }
    else:
        headers = {
            'Content-Type': 'application/json'
        }
    return headers

@user_api.context_processor
def handle_context():
    return dict(req_args = request.args, int = int, len = len, datetime=datetime, str = str)

@user_api.route('/', methods=['GET', 'POST'])
@user_api.route('/index', methods=['GET', 'POST'])
def index(headers=getheaders()):

    #get editorials from api
    editorials = requests.get('https://admin.thebaton.in/editorials?_sort=id:DESC&_limit=6', headers=headers)

    #get blogposts from api
    blogposts = requests.get('https://admin.thebaton.in/blogposts?_sort=id:DESC&_limit=6', headers=headers)

    #contact form
    form = ContactForm()
    if form.validate_on_submit():
        flash('Your message has been sent to TheBaton Team. We will reach back to you shortly')
        return redirect(url_for('user_api.index'))

    return render_template('index.html', title='Home - TheBaton', form=form, editorials=editorials, blogposts=blogposts)

@user_api.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        
        #set cookie remember_me
        if form.remember_me.data:
            remember_me = datetime.now() + timedelta(days=30)
        else:
            remember_me = datetime.now() + timedelta(days=1)
        
        #get access_token from api
        request = requests.post('https://admin.thebaton.in/auth/local', json={
            'identifier': form.email.data,
            'password': form.password.data
        })
        access_token = request.json()['jwt']

        #set cookie with access_token
        response = make_response(redirect(url_for('user_api.index')))
        response.set_cookie('access_token', access_token, expires=remember_me)
        
        return response


    return render_template('login.html', title='Sign In - TheBaton', form=form)

@user_api.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm()
    if form.validate_on_submit():
        return redirect(url_for('user_api.index'))

    return render_template('register.html', title='Register - TheBaton', form=form)

@user_api.route('/logout')
def logout():
    response = make_response(redirect(url_for('user_api.index')))
    response.set_cookie('access_token', '', expires=0)
    return response

@user_api.route('/editorials', methods=['GET'])
def editorials():
    page = request.args.get('page', 1, type=int)
    editorials = requests.get('https://admin.thebaton.in/editorials')
    editorials = editorials.reverse()
    pagination = editorials.paginate(page, per_page=6, error_out=False)
    editorials = pagination.items
    return render_template('editorials.html', title='Editorials - TheBaton', editorials=editorials, pagination=pagination)

@user_api.route('/editorials/<string:public_id>', methods=['GET'])
def editorial(public_id, headers=getheaders()):
    editorial = requests.get('https://admin.thebaton.in/editorials/' + public_id, headers=headers)
    #get comments from api
    comments = requests.get('https://admin.thebaton.in/editorials/' + public_id + '/comments', headers=headers)
    comments = comments.reverse()
    #get next editorial
    next_editorial = requests.get('https://admin.thebaton.in/editorials/' + public_id + '/next', headers=headers)
    return render_template('editorial.html', title=f'{editorial.title} - Editorial - TheBaton', editorial=editorial, comments=comments, next_editorial=next_editorial)

@user_api.route('/editorials/<string:public_id>', methods=['POST', 'DELETE', 'PUT'])
def editorial_functions(public_id, headers=getheaders()):
    if request.form['action'] == 'like':
        r= requests.post('https://admin.thebaton.in/editorials/' + public_id + '/like', headers=headers)
    elif request.form['action'] == 'unlike':
        r= requests.delete('https://admin.thebaton.in/editorials/' + public_id + '/like', headers=headers)
    elif request.form['action'] == 'comment':
        r= requests.post('https://admin.thebaton.in/editorials/' + public_id + '/comments', json={
            'comment': request.form['comment'],
        }, headers=headers)
    elif request.form['action'] == 'deleteComment':
        r= requests.delete('https://admin.thebaton.in/editorials/' + public_id + '/comments/' + request.form['comment_id'], headers=headers)
    elif request.form['action'] == 'updateComment':
        r= requests.put('https://admin.thebaton.in/editorials/' + public_id + '/comments/' + request.form['comment_id'], json={
            'comment': request.form['comment'],
        }, headers=headers)
    
    if r.status_code == 200:
        return redirect(url_for('user_api.editorial', public_id=public_id))
    else:
        flash('Something went wrong')
        return redirect(url_for('user_api.editorial', public_id=public_id))


@user_api.route('/blogposts', methods=['GET'])
def blogposts():
    page = request.args.get('page', 1, type=int)
    blogposts = requests.get('https://admin.thebaton.in/blogposts')
    blogposts = blogposts.reverse()
    pagination = blogposts.paginate(page, per_page=6, error_out=False)
    blogposts = pagination.items
    return render_template('blogposts.html', title='Blogposts - TheBaton', blogposts=blogposts, pagination=pagination)

    
@user_api.route('/blogposts/<string:public_id>', methods=['GET'])
def blogpost(public_id, headers=getheaders()):
    blogpost = requests.get('https://admin.thebaton.in/blogposts/' + public_id, headers=headers)
    #get comments from api
    comments = requests.get('https://admin.thebaton.in/blogposts/' + public_id + '/comments', headers=headers)
    comments = comments.reverse()
    #get next editorial
    next_blogpost = requests.get('https://admin.thebaton.in/blogposts/' + public_id + '/next', headers=headers)
    return render_template('blogpost.html', title=f'{blogpost.title} - Blogpost - TheBaton', blogpost=blogpost, comments=comments, next_blogpost=next_blogpost)


@user_api.route('/blogposts/<string:public_id>', methods=['POST', 'DELETE', 'PUT'])
def blogpost_functions(public_id, headers=getheaders()):
    if request.form['action'] == 'like':
        r= requests.post('https://admin.thebaton.in/blogposts/' + public_id + '/like', headers=headers)
    elif request.form['action'] == 'unlike':
        r= requests.delete('https://admin.thebaton.in/blogposts/' + public_id + '/like', headers=headers)
    elif request.form['action'] == 'comment':
        r= requests.post('https://admin.thebaton.in/blogposts/' + public_id + '/comments', json={
            'comment': request.form['comment'],
        }, headers=headers)
    elif request.form['action'] == 'deleteComment':
        r= requests.delete('https://admin.thebaton.in/blogposts/' + public_id + '/comments/' + request.form['comment_id'], headers=headers)
    elif request.form['action'] == 'updateComment':
        r= requests.put('https://admin.thebaton.in/blogposts/' + public_id + '/comments/' + request.form['comment_id'], json={
            'comment': request.form['comment'],
        }, headers=headers)
    
    if r.status_code == 200:
        return redirect(url_for('user_api.blogpost', public_id=public_id))
    else:
        flash('Something went wrong')
        return redirect(url_for('user_api.blogpost', public_id=public_id))
#podcasts   
#@user_api.route('/podcasts', methods=['GET'])
#def podcasts():
    #page = request.args.get('page', 1, type=int)
    #podcasts = requests.get('https://admin.thebaton.in/podcasts')
    #podcasts = podcasts.reverse()
    #pagination = podcasts.paginate(page, per_page=6, error_out=False)
    #podcasts = pagination.items
    #return render_template('podcasts.html', title='Podcasts - TheBaton', podcasts=podcasts, pagination=pagination)
#    return render_template('podcasts.html', title='Podcasts - TheBaton')

#contact
@user_api.route('/contact', methods=['GET'])
def contact():
    return render_template('contact.html', title='Contact - TheBaton')

#about
@user_api.route('/about', methods=['GET'])
def about():
    return render_template('about.html', title='About - TheBaton')

#terms
#@user_api.route('/terms', methods=['GET'])
#def terms():
#    return render_template('terms.html', title='Terms - TheBaton')

#privacy
#@user_api.route('/privacy', methods=['GET'])
#def privacy():
#    return render_template('privacy.html', title='Privacy - TheBaton')

#team
#@user_api.route('/team', methods=['GET'])
#def team():
#    return render_template('team.html', title='Team - TheBaton')

#authors
@user_api.route('/authors', methods=['GET'])
def authors():
    return render_template('authors.html', title='Authors - TheBaton')

#author profile
@user_api.route('/author/<string:public_id>', methods=['GET'])
def author(public_id, headers=getheaders()):
    author = requests.get('https://admin.thebaton.in/authors/' + public_id, headers=headers)
    return render_template('author.html', title=f'{author.name} - Author - TheBaton', author=author)