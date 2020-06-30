from flask import Flask, render_template
app = Flask(__name__)
@app.before_request
def before_request():
    print("1")
@app.route('/byar')
def byar():
    print("2")
    return render_template('before-after.html')
@app.after_request
def after_request(response):
    print("3")
    return response
if __name__ == '__main__':
    app.run(debug=True, port=8000)