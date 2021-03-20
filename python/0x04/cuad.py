#!/usr/bin/env python3
""" Escribir en Python un programa que haga lo siguiente:
    Muestra un mensaje de bienvenida por pantalla.
    Le pide al usuario que introduzca dos números enteros n1 y n2.
    Imprime el cuadrado de todos los números enteros del intervalo [n1, n2)
    Muestra un mensaje de despedida por pantalla. """


def cuad():
    print("Welcome")
    n1 = int(input("Enter an integer number: "))
    n2 = int(input("Enter another integer number: "))
    for x in range(n1, n2):
        print(x * x)
    print("Bye")


cuad()
