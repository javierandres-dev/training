from flask import Flask, jsonify
from database import users
app = Flask(__name__)
@app.route('/users', methods=['GET'])
def getUsers():
    return jsonify(users)
@app.route('/users/<int:argv>', methods=['GET'])
def getUser(argv):
    print(argv)
    usersFound = [user for user in users if user['oi'] == argv]
    if(len(usersFound) > 0):
        return jsonify(usersFound[0])

if __name__ == '__main__':
    app.run(debug=True, port=4000)