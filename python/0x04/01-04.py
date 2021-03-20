#!/usr/bin/env python3
""" Si la salida sigue siendo poco informativa seguir mejorándola hasta que
    sea lo suficientemente clara. """


def nom_cuad(n1, n2):
    for x in range(n1, n2):
        print("x = {}\tx^2 = x * x => {} x {} = {}".format(x, x, x, x * x))


nom_cuad(3, 5)
