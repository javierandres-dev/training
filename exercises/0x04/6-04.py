"""Escribir una función que calcule el total de una factura tras aplicarle el
IVA. La función debe recibir la cantidad sin IVA y el porcentaje de IVA a
aplicar, y devolver el total de la factura. Si se invoca la función sin
pasarle el porcentaje de IVA, deberá aplicar un 21%."""


def receipt(subtotal, porcentage=0.21):
    tax = subtotal * porcentage
    total = subtotal + tax
    return total


print(receipt(10))
print(receipt(10, 0.10))
