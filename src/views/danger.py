from . import jwt
from flask_jwt_extended import verify_jwt_in_request, get_jwt
from flask import jsonify
from functools import wraps

def superadmin_required():
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            verify_jwt_in_request()
            claims = get_jwt()
            if "superadmin" in claims['roles']:
                return fn(*args, **kwargs)
            else:
                return jsonify(msg="Admins only!"), 403

        return decorator

    return wrapper


def staff_required():
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            verify_jwt_in_request()
            claims = get_jwt()
            if "staff" in claims['roles']:
                return fn(*args, **kwargs)
            else:
                return jsonify(msg="Staff only!"), 403

        return decorator

    return wrapper


