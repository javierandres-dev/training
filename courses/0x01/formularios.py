from flask import Flask
from flask import render_template
from wtforms import Form
from wtforms import StringField, TextField
from wtforms.fields.html5 import EmailField
app = Flask(__name__)
@app.route('/formularios')
def formularios():
    title = 'Curso Flask'
    return render_template('formularios.html', title = title)

class CommentForm(Form):
    username = StringField('nombre de usuario')
    email = EmailField('correo electrónico')
    comment = TextField('comentario')

if __name__ == '__name__':
    app.run(debug=True, port=8000)