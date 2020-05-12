from flask import Flask
app = Flask(__name__)# nuevo objeto
@app.route('/')# wrap o decorador
def index():# método
    return 'Hello World! desde index.py'
@app.route('/diferente')
def diferente():
    return 'Contenido diferente'
if __name__ == '__main__':
    app.run(debug = True, port = 8000)# se encarga de ejecutar el servidor en el puerto 5000