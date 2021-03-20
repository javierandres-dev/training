#!/usr/bin/env python3
""" La salida del programa cuad es poco informativa.
    Escribir un programa nom_cuad que ponga el número junto a su cuadrado.
    Ejecutar el programa nuevo. """


def nom_cuad(n1, n2):
    for x in range(n1, n2):
        print("x = {}\tx^2 = {}".format(x, x * x))


nom_cuad(3, 5)
