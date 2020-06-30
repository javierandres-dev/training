from flask import request, make_response, redirect, render_template
from flask import session, url_for, flash
import unittest
from app import create_app
from app.forms import LoginForm
app = create_app()
todos = ['Comprar café', 'Enviar solicitud', 'Entregar video a productor']


@app.cli.command()
def test():
    tests = unittest.TestLoader().discover('tests')
    unittest.TextTestRunner().run(tests)


@app.errorhandler(404)
def not_found(error):
    return render_template('page_not_found.html', error=error)


@app.route('/')
def index():
    user_ip = request.remote_addr
    response = make_response(redirect('/hello'))
    session['user_ip'] = user_ip
    return response


@app.route('/hello', methods=['GET'])
def hello():
    user_ip = session.get('user_ip')
    username = session.get('username')
    context = {
        'user_ip': user_ip,
        'todos': todos,
        'username': username
    }
    return render_template('hello.html', **context)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
