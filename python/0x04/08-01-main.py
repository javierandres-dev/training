#!/usr/bin/env python3
""" Escribir una función que reciba una lista desordenada y un elemento, que:
    1. Busque todos los elementos coincidan con el pasado por parámetro y
    devuelva la cantidad de coincidencias encontradas.
    2. Busque la primera coincidencia del elemento en la lista y devuelva su
    posición.
    3. Utilizando la función anterior, busque todos los elementos coincidan
    con el pasado por parámetro y devuelva una lista con las posiciones. """
fn = __import__('01').fn

resp = fn([5, 8, 3, 7, 1, 9, 4, 2, 6, 8, 3, 7, 5, 9, 1, 4, 8, 6, 2], 8)
# print(resp)
# print(type(resp))
print("Number of matches found: {}".format(resp[0]))
print("The first match is in the position: {}".format(resp[1]))
print("All positions: {}".format(resp[2]))
resp = fn([89, 55, 67, 24, 18, 68, 32, 38, 99, 69, 45, 87, 36, 82, 41], 69)
print("Number of matches found: {}".format(resp[0]))
print("The first match is in the position: {}".format(resp[1]))
print("All positions: {}".format(resp[2]))
resp = fn([895, 567, 241, 868, 512, 323, 512, 999, 512, 458, 512, 368], 512)
print("Number of matches found: {}".format(resp[0]))
print("The first match is in the position: {}".format(resp[1]))
print("All positions: {}".format(resp[2]))
