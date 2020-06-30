from flask import Flask
from flask import request
from flask import render_template
app = Flask(__name__)# nuevo objeto
@app.route('/user/<nombre>')# wrap o decorador
def user(nombre = 'Javier'):# método
    edad = 44
    miLista = [1, 2, 3, 4]
    return render_template('template_tags.html', nombre = nombre, edad = edad, miLista = miLista)
if __name__ == '__main__':
    app.run(debug = True, port = 8000)# se encarga de ejecutar el servidor en el puerto 5000