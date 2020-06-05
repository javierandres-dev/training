#!/usr/bin/env python3
from math import sqrt
print("----")
print("Pide al usuario dos pares de números x1,y1 y x2,y2, que representen dos puntos en el plano. Calcula y muestra la distancia entre ellos.")
print("---")
x1=int(input("Ingresa el número para x1: "))
y1=int(input("Ingresa el número para y1: "))
x2=int(input("Ingresa el número para x2: "))
y2=int(input("Ingresa el número para y2: "))
print("--")
d=int(sqrt(((x2-x1)**2)+((y2-y1)**2)))
print("La distancia entre los puntos (x1, y1) y (x2, y2) '({}, {}) y ({}, {})' es: {}".format(x1,y1,x2,y2,d))
print("-")
