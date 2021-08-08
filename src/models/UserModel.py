from . import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String)
    email = db.Column(db.String, unique=True, nullable=False)
    email_verified = db.Column(db.Boolean, nullable=False, default=False)
    image_file = db.Column(db.String, nullable=False, default='static/images/default_profile.jpg')
    password = db.Column(db.String, nullable=False)
    role = db.Column(db.String, nullable=False, default='user')
    posts = db.relationship('Blogpost', backref='author', lazy=True)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.image_file}')"
