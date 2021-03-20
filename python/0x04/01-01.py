#!/usr/bin/env python3
""" Correr tres veces el programa cuad con valores de entrada (3,5), (3,3) y
    (5,3) respectivamente. ¿Qué sucede en cada caso? """


def cuad(n1, n2):
    for x in range(n1, n2):
        print(x * x)


cuad(3, 5)  # Success
cuad(3, 3)  # Nothing, wrong range(start, stop, step)
cuad(5, 3)  # Nothing, wrong range(start, stop, step)
