from requests.models import stream_decode_response_unicode
from flask import jsonify
from functools import wraps
import requests

# decorator to get access token from cookie
def get_access_token(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        try:
            access_token = args[0].cookies['access_token']
        except KeyError:
            return jsonify({'message': 'No access token'}), 401
        return func(*args, access_token=access_token, **kwargs)
    return wrapper
