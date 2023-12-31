# -*- coding: utf-8 -*-
from flask import *

app = Flask(__name__)


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
    app.run(host="0.0.0.0",debug=True)
