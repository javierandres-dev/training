#!/usr/bin/env python3
""" Escribir una función que reciba una lista desordenada y un elemento, que:
    1. Busque todos los elementos coincidan con el pasado por parámetro y
    devuelva la cantidad de coincidencias encontradas.
    2. Busque la primera coincidencia del elemento en la lista y devuelva su
    posición.
    3. Utilizando la función anterior, busque todos los elementos coincidan
    con el pasado por parámetro y devuelva una lista con las posiciones. """


def fn(ul, el):
    index = 0
    positions = []
    for value in ul:
        if (el == value):
            positions.append(index)
        index += 1
    n_matches = len(positions)
    first_match = positions[0]
    return n_matches, first_match, positions
