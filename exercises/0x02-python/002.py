#!/usr/bin/env python3
print("----")
print("Calcular el perímetro y área de un rectángulo dada su base y su altura.")
print("---")
base = int(input("Ingrese la base del rectángulo: "))
altura = int(input("Ingrese la altura del rectángulo: "))
print("--")
perimetro = (base + altura) * 2
print("El perímetro del rectángulo es: {}".format(perimetro))
area = (base * altura)
print("El área del rectángulo es: {}".format(area))
print("-")
