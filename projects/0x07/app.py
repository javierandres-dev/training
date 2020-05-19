from flask import Flask
from flask_mysqldb import MySQL
app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'falskcontacts'
mysql = MySQL(app)
@app.route('/')
def index():
    return 'Hello World!'
@app.route('/add_contact')
def add_contact():
    return 'add-contact'
@app.route('/edit')
def edit_contact():
    return 'edit_contact'
@app.route('/delete')
def delete_contact():
    return 'delete_contact'
if __name__ == "__main__":
    app.run(port = 3000, debug = True)