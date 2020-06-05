""" Ejercicios de bucles
Escribir un programa que pida al usuario un número entero positivo y
muestre por pantalla la cuenta atrás desde ese número hasta cero
separados por comas. """
def my_code():
    n = int(input("Ingrese un número entero positivo: "))
    if n > 0:
        i = n
        while i >= 0:
            print(i, end=", ")
            i -= 1

def my_code1():
    n = int(input("Ingrese un número entero positivo: "))
    if n > 0:
        for i in range(n, -1, -1):
            print(i, end=", ")

my_code()