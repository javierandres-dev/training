#!/usr/bin/env python3
""" Implementar algoritmos que resuelvan los siguientes problemas:
    1. Dados dos números, indicar la suma, resta, división y multiplicación
    de ambos.
    2. Dado un número entero N, imprimir su tabla de multiplicar.
    3. Dado un número entero N, imprimir su factorial. """
n1 = int(input("Enter a integer number: "))
n2 = int(input("Enter another integer number: "))
print(f"{n1} + {n2} = {n1 + n2}\n{n1} - {n2} = {n1 - n2}\n\
{n1} x {n2} = {n1 * n2}\n{n1} ÷ {n2} = {n1 / n2}")
n1 = int(input("Enter a integer number: "))
for i in range(n1):
    print(f"{n1} x {i} = {n1 * i}")
print(f"{n1} x {n1} = {n1 * n1}")
n1 = int(input("Enter a integer number: "))
factorial = n1
for i in reversed(range(n1)):
    if i == 0:
        break
    factorial *= i
print(f"Factorial of {n1} is: {factorial}")
