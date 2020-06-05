#!/usr/bin/env python3
from math import sqrt
from math import pow
print("----")
print("""Realizar un algoritmo que lea un número y que muestre su raíz cuadrada y su raíz cúbica.
Python3 no tiene ninguna función predefinida que permita calcular la raíz cúbica, ¿Cómo se puede calcular?""")
print("---")
x=int(input("Introduce un número: "))
print("--")
sr=round(sqrt(x))
y=round(x**(1. / 3.))
if(pow(y, 3) == x):
    cr=y
print("Del número {}, la raíz cuadrada es: {} y la raíz cúbica es: {}".format(x,sr,cr))
print("-")
