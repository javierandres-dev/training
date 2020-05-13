from wtforms import Form
from wtforms import StringField, TextField
from wtforms.fields.html5 import EmailField
class CommentForm(Form):
    username = StringField('nombre de usuario')
    email = EmailField('correo electrónico')
    comment = TextField('comentario')
