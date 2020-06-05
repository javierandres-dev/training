""" Ejercicios de listas y tuplas
Escribir un programa que almacene en una lista los siguientes precios,
50, 75, 46, 22, 80, 65, 8, y muestre por pantalla el menor
y el mayor de los precios. """
def my_code():
    price = [50, 75, 46, 22, 80, 65, 8]
    maximum = max(price)
    minimum = min(price)
    print("De la lista: {}\nEl minimo es: {}\nEl maximo es: {}".format(price, minimum, maximum))

my_code()