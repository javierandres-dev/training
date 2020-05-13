from flask import Flask
from flask import render_template
app = Flask(__name__)
"""
@app.route('/')
def index():
    nombre = 'Javier'
    return render_template('index.html', nombre = nombre)
"""
@app.route('/extends')
def extends():
    miLista = ['any1', 'any2', 'any3', 'any4']
    return render_template('extends.html', miLista = miLista)
if __name__ == '__main__':
    app.run(debug = True, port = 8000)