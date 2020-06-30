from flask import Flask
from flask import render_template
import formularios
app = Flask(__name__)
@app.route('/formulario')
def formulario():
    comment_form = forms.CommentForm()
    title = 'Curso Flask'
    return render_template('formulario.html', title = title, form = comment_form)
if __name__ == '__main__':
    app.run(debug = True, port = 8000)