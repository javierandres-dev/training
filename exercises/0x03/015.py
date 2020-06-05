#!/usr/bin/env python3
print("----")
print("""Dadas dos variables numéricas A y B, que el usuario debe teclear,
se pide realizar un algoritmo que intercambie los valores de ambas variables
y muestre cuanto valen al final las dos variables.""")
print("---")
a=int(input("Ingrese el valor para 'A': "))
b=int(input("Ingrese el valor para 'B': "))
print("--")
print("Antes del intercambio\nA = {}\nB = {}".format(a,b))
tmp=a
a=b
b=tmp
print("Después del intercambio\nA = {}\nB = {}".format(a,b))
print("-")
