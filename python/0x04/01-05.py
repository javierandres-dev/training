#!/usr/bin/env python3
""" Escribir un programa que pregunte al usuario:
    1. su nombre, y luego lo salude.
    2. dos números y luego muestre el producto. """
name = input("Enter your name: ")
print("Hello, {}".format(name))
n1 = int(input("Enter a integer number: "))
n2 = int(input("Enter another integer number: "))
print("{} x {} = {}".format(n1, n2, n1 * n2))
