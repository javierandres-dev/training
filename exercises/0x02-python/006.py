#!/usr/bin/env python3
print("----")
print("Calcular la media de tres números pedidos por teclado.")
print("---")
a = int(input("Ingresa el primer número: "))
b = int(input("Ingresa el segundo número: "))
c = int(input("Ingresa el tercer número: "))
print("--")
med = (a+b+c) / 3
print("La media de {}, {}, {} es: {:.1f}".format(a,b,c,med))
print("-")
