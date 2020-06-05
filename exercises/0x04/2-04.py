""" Ejercicios de condicionales
Escribir un programa que pida al usuario un número entero
y muestre por pantalla si es par o impar. """
def my_code():
    n = int(input("Ingrese un número entero: "))
    if n % 2 == 0:
        print(f"{n} en un número par")
    else:
        print(f"{n} es un número impar")

my_code()