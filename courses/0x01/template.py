from flask import Flask
from flask import render_template
app = Flask(__name__)# nuevo objeto
@app.route('/template')# wrap o decorador
def template():# método
    return render_template('template.html')
if __name__ == '__main__':
    app.run(debug = True, port = 8000)# se encarga de ejecutar el servidor en el puerto 5000