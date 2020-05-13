from flask import Flask
from flask import render_template
app = Flask(__name__)
@app.route('/base')
def base():
    return render_template('base.html')
if __name__ == '__main__':
    app.run(debug = True, port = 8000)