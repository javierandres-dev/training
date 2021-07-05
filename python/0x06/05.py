""" Realizar un programa que haga el proceso de formula general para la
resolución de ecuaciones, el usuario debe ingresar los valores de “a”, “b” y
“c", y el programa debe hacer el proceso para que al final muestre el mensaje:
“La solución es: <solucion>” """
from math import sqrt
a = int(input())
b = int(input())
c = int(input())
if ((b ** 2) - (4 * a * c)) < 0:
    print('No se puede realizar el proceso')
else:
    x1 = (-b + sqrt((b ** 2) - (4 * a * c))) / (2 * a)
    x2 = (-b - sqrt((b ** 2) - (4 * a * c))) / (2 * a)
    print("La solución es:\nx1 = ", x1, '\nx2 = ', x2)
