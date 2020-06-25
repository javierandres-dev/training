from flask import Flask, jsonify
from database import usuarios
app = Flask(__name__)
@app.route('/usuarios', methods=['GET'])
def getUsuarios():
    return jsonify(usuarios)
if __name__ == '__main__':
    app.run(debug=True, port=4000)