from . import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String)
    email = db.Column(db.String, unique=True, nullable=False)
    email_verified = db.Column(db.Boolean, nullable=False, default=False)
    profile_picture = db.Column(db.String, nullable=False, default='static/images/default_profile_picture.jpg')
    profile_cover_picture = db.Column(db.String, nullable=False, default='static/images/default_profile_cover_picture.jpg')
    password = db.Column(db.String, nullable=False)
    role = db.Column(db.String, nullable=False, default='user')
    bio = db.Column(db.String, default='Hi welcome to my profile!')
    socials_facebook = db.Column(db.String)
    socials_linkedin = db.Column(db.String)
    socials_instagram = db.Column(db.String)
    socials_twitter = db.Column(db.String)
    blogposts = db.relationship('Blogpost', backref='author', lazy=True)
    editorials = db.relationship('Editorial', backref='author', lazy=True)
    


    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.image_file}')"
