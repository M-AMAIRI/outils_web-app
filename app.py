# -*- coding: utf-8 -*-
from flask import *
from werkzeug.utils import secure_filename

from flask_bootstrap import Bootstrap
from urllib.parse import *
import sqlite3, hashlib, os, time, random

app = Flask(__name__)
app.secret_key = 'dev'
UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = set(['jpeg', 'jpg', 'png', 'gif'])

Bootstrap(app)

@app.route('/Generator')
def Generator():
    return render_template('passewordGenerator.html')

@app.route('/randomselector')
def randomselector():
    return render_template('randomselector.html')

@app.route('/todolist')
def todolist():
    return render_template('todolist.html')

if __name__=="__main__":
    app.run(debug=True)