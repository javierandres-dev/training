""" Ejercicios de tipos de datos simples
Una panadería vende barras de pan a 3.49€ cada una. El pan que no es el día
tiene un descuento del 60%. Escribir un programa que comience leyendo el número
de barras vendidas que no son del día. Después el programa debe mostrar el
precio habitual de una barra de pan, el descuento que se le hace por no ser
fresca y el coste final total. """
def my_code():
    price = 3.49
    discount = price * 0.60
    low_price = price - discount
    number = int(input("Ingrese el número de barras vendidas de pan QUE NO SON DEL DÍA: "))
    print(f"""Valor habitual de una barra de pan: €{price}
----
El pan que no es del día tiene un descuento del 60%: €{discount:.2f}
Valor de una barra de pan que no es del día: €{low_price:.2f}
----
Cantidad de barras de pan que no son del día vendidas: {number}
Valor unitario: €{low_price:.2f}
Valor total: €{number * low_price:.2f}
----
Precio habitual {number * price:.2f}
Total descontado del precio habitual: €{(number * price) - (number * low_price):.2f}""")

my_code()