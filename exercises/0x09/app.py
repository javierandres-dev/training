from flask import Flask, jsonify, request
from products import products
app = Flask(__name__)

@app.route('/ping')
def ping():
    return 'pong'

@app.route('/string')
def _string():
    return 'response a string by default.'

@app.route('/object')
def _object():
    return jsonify({'message': 'response a object.'})

@app.route('/products', methods=['GET'])
def getProducts():
    return jsonify(products)

@app.route('/products/<argv>')
def getProduct(argv):
    productsFound = [product for product in products if product['name'] == argv]
    if (len(productsFound) > 0):
        return jsonify(productsFound[0])
    return jsonify({'message': 'Product not found'})

@app.route('/products', methods=['POST'])
def addProduct():
    new_product = {
        'name': request.json['name'],
        'price': request.json['price'],
        'quantity': request.json['quantity']
    }
    products.append(new_product)
    return jsonify({'message': 'Product added succesfully', 'products': products})

@app.route('/products/<string:argv>', methods=['PUT'])
def editProduct(argv):
    productFound = [product for product in products if product['name'] == argv]
    if (len(productFound) > 0):
        productFound[0]['name'] = request.json['name']
        productFound[0]['price'] = request.json['price']
        productFound[0]['quantity'] = request.json['quantity']
        return jsonify({
            'message': 'Product updated',
            'product': productFound[0]
        })
    return jsonify({'message': 'Product not found'})

@app.route('/products/<string:argv>', methods=['DELETE'])
def deleteProduct(argv):
    productFound = [product for product in products if product['name'] == argv]
    if(len(productFound) > 0):
        products.remove(productFound[0])
        return jsonify({
            'message': 'Product deleted',
            'products': products
        })
    return jsonify({'message': 'Product not found'})

if __name__ == '__main__':
    app.run(debug=True, port=4000)