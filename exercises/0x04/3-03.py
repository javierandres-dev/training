""" Ejercicios de bucles
Escribir un programa que pida al usuario un número entero positivo y
muestre por pantalla todos los números impares desde 1 hasta ese número
separados por comas. """
def my_code():
    n = int(input("Ingrese un número entero positivo: "))
    if n > 0:
        for i in range(n):
            if i % 2 != 0:
                print(i, end=", ")

my_code()