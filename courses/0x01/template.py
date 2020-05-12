from flask import Flask
from flask import render_template
app = Flask(__name__)# nuevo objeto
@app.route('/')# wrap o decorador
def index():# método
    return render_template('index.html')
if __name__ == '__main__':
    app.run(debug = True, port = 8000)# se encarga de ejecutar el servidor en el puerto 5000