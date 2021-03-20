#!/usr/bin/env python3
print("----")
print("Escribir un programa que convierta un valor dado en grados Fahrenheit a grados Celsius.")
print("---")
gf = int(input("Ingrese grados Fahrenheit: "))
print("--")
gc = ((gf-32)*5/9)
print("{} grados Farenheit equivalen a {:.3f} grados Celsius.".format(gf, gc))
print("-")
