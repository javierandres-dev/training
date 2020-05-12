from flask import Flask
from flask import request
app = Flask(__name__)# nuevo objeto
@app.route('/')# wrap o decorador
def index():# método
    return 'Hello World! desde params.py'
@app.route('/params')
def params():
    param = request.args.get('params1', 'no contiene este parametro')
    return 'El parametro es. {}'.format(param)
@app.route('/params/<any>')
def paramsanystring():
    return 'String por default'
@app.route('/params/<int:any>')
def paramsanynumber():
    return 'Tipo especificado'
if __name__ == '__main__':
    app.run(debug = True, port = 8000)# se encarga de ejecutar el servidor en el puerto 5000