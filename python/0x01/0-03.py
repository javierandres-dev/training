#!/usr/bin/env python3
from math import sqrt
print("----")
print("Dados los catetos de un triángulo rectángulo, calcular su hipotenusa.")
print("---")
c1 = int(input("Ingrese el valor del primer cateto: "))
c2 = int(input("Ingrese el valor del segundo cateto: "))
print("--")
h = sqrt(((c1)**2) + ((c2)**2))
print("El valor de la hipotenusa es: {}".format(h))
print("-")
