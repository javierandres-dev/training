#!/usr/bin/env python3
""" Insertar instrucciones de depuración que permitan ver el valor asociado
    con la variable x en el cuerpo del ciclo for y después que se sale de tal
    ciclo. Volver a correr tres veces el programa cuad con valores de entrada
    (3,5), (3,3) y (5,3) respectivamente, y explicar lo que sucede. """


def cuad(n1, n2):
    for x in range(n1, n2):
        print("x in loop: {}".format(x))
        print(x * x)


cuad(3, 5)  # Success
cuad(3, 3)  # Nothing, wrong range(start, stop, step)
cuad(5, 3)  # Nothing, wrong range(start, stop, step)
