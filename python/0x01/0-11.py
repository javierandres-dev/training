#!/usr/bin/env python3
print("----")
print("""Pide al usuario dos números y muestra la “distancia” entre ellos
(el valor absoluto de su diferencia, de modo que el resultado sea siempre positivo).""")
print("---")
a=int(input("Ingrese el primer número: "))
b=int(input("Ingrese el segundo número: "))
print("--")
if(a<b):
    c=b-a
else:
    tmp=b
    b=a
    a=tmp
    c=b-a
    tmp=a
    a=b
    b=tmp
print("La 'distancia' entre {} y {} es: {}".format(a,b,c))
print("-")
