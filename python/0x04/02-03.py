#!/usr/bin/env python3
""" Escribir un programa que convierta un valor dado en grados Fahrenheit a
    grados Celsius. Recordar que la fórmula para la conversión es:
        F = 9/5 * C + 32. """
celsius = int(input("Enter Celsius degrees: "))
fahrenheit = 9 / 5 * celsius + 32
print(f"{celsius} degrees Celsius equals {fahrenheit} degrees Fahrenheit")
