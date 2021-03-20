#!/usr/bin/env python3
""" Escribir un programa que imprima todos los números pares entre dos
    números que se le pidan al usuario. """
n1 = int(input("Enter a integer number: "))
n2 = int(input("Enter another integer number: "))
for number in range(n1, n2 + 1):
    if number % 2 == 0:
        print(number)
