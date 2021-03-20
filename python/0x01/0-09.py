#!/usr/bin/env python3
print("----")
print("Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuanto deberá pagar finalmente por su compra.")
print("---")
a=int(input("Ingrese el valor total de su compra: "))
print("--")
b=a*0.15
print("Descontaremos el 15% del valor:\t{:.0f}\nUsted deberá pagar un total de:\t{:.0f}".format(b,a-b))
print("-")
