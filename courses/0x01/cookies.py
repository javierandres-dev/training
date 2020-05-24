from flask import Flask, render_template, make_response
app = Flask(__name__)
@app.route('/cookies')
def cookies():
    response = make_response(render_template('cookies.html'))
    response.set_cookie('nombre_cookie', 'valor_cookie')
    return response
if __name__ == '__main__':
    app.run(debug = True, port = 8000)