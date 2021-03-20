#!/usr/bin/env python3
""" Escribir un programa que le pregunte al usuario una cantidad de pesos,
    una tasa de interés y un número de años y muestre como resultado el
    monto final a obtener. La fórmula a utilizar es:
        Cn = C * (1 + x/100) ^ n
    Donde C es el capital inicial, x es la tasa de interés y n es el número
    de años a calcular. """
c = int(input("Enter the amount of pesos: "))
x = float(input("Enter the interest rate: "))
n = int(input("Enter the number of years: "))
print("The final amount is: {}".format(int(c * (1 + x / 100) ** n)))
