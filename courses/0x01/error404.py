from flask import Flask
from flask import render_template
app = Flask(__name__)
@app.errorhandler(404)
def page_not_found(err):
    return render_template('error404.html'), 404
if __name__ == '__main__':
    app.run(debug=True, port=8000)