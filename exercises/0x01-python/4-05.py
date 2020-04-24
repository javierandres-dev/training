""" Ejercicios de listas y tuplas
Escribir un programa que almacene en una lista los números del 1 al 10
y los muestre por pantalla en orden inverso separados por comas. """
def my_code():
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    numbers.reverse()
    for number in numbers:
        print(number, end=", ")
    print(end="\n")

my_code()