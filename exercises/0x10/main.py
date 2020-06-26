from flask import Flask, jsonify, request
from database import users
app = Flask(__name__)


@app.route('/users', methods=['GET'])
def showUsers():
    return jsonify(users)


@app.route('/users/<int:argv>', methods=['GET'])
def showUser(argv):
    userFound = [user for user in users if user['id'] == argv]
    if(len(userFound) > 0):
        return jsonify(userFound[0])


@app.route('/users', methods=['POST'])
def addUser():
    nId = (len(users) + 1)
    newUser = {
        'id': nId,
        'oi': request.json['oi'],
        'name': request.json['name'],
        'email': request.json['email'],
        'phone': request.json['phone']
    }
    users.append(newUser)
    return jsonify({'message': 'Nuevo usuario creado.', 'users': users})


@app.route('/users/<int:argv>', methods=['PUT'])
def editUser(argv):
    userFound = [user for user in users if user['id'] == argv]
    if(len(userFound) > 0):
        userFound[0]['oi'] = request.json['oi']
        userFound[0]['name'] = request.json['name']
        userFound[0]['email'] = request.json['email']
        userFound[0]['phone'] = request.json['phone']
        return jsonify({'message': 'Usuario editado.', 'user': userFound[0]})
    return jsonify({'message': 'Error.  Usuario no encontrado.'})


@app.route('/users/<int:argv>', methods=['DELETE'])
def delleteUser(argv):
    userFound = [user for user in users if user['id'] == argv]
    if(len(userFound) > 0):
        users.remove(userFound[0])
        return jsonify({'message': 'Usuario eliminado', 'users': users})
    return jsonify({'message': 'Error.  Usuario no encontrado.'})


if __name__ == '__main__':
    app.run(debug=True, port=4000)
