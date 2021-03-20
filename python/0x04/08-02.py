#!/usr/bin/env python3
""" Escribir una función que reciba una lista de números no ordenada, que:
    1. Devuelva el valor máximo.
    2. Devuelva una tupla que incluya el valor máximo y su posición.
    3. ¿Qué sucede si los elementos son cadenas de caracteres?
    Nota: no utilizar lista.sort() """


def fn(ul):
    maximum = 0
    index = 0
    for item in ul:
        if item > maximum:
            maximum = item
            position = index
        index += 1
    return maximum, position


def wm(ul):
    maximum = max(ul)
    position = ul.index(maximum)
    return maximum, position


resp = fn([5, 3, 7, 1, 9, 4, 8, 6, 2])
print("The maximun value is: {}, its position is {}".format(resp[0], resp[1]))
print(resp)
print(type(resp))
resp = fn([89, 55, 67, 24, 18, 68, 32, 38, 99, 69, 45, 87, 36, 82, 41])
print("The maximun value is: {}, its position is {}".format(resp[0], resp[1]))
print(resp)
print(type(resp))
resp = fn([895, 567, 241, 868, 512, 323, 969, 458, 368, 968, 125, 000, 568])
print("The maximun value is: {}, its position is {}".format(resp[0], resp[1]))
print(resp)
# resp = fn(["abc", "xyz", "123"])
# print("maximun value is: {}, its position is {}".format(resp[0], resp[1]))
# print(resp)
# print(type(resp))
print("\t---- With methods ----")
resp = wm([5, 3, 7, 1, 9, 4, 8, 6, 2])
print("The maximun value is: {}, its position is {}".format(resp[0], resp[1]))
print(resp)
print(type(resp))
resp = wm([89, 55, 67, 24, 18, 68, 32, 38, 99, 69, 45, 87, 36, 82, 41])
print("The maximun value is: {}, its position is {}".format(resp[0], resp[1]))
print(resp)
print(type(resp))
resp = wm([895, 567, 241, 868, 512, 323, 969, 458, 368, 968, 125, 000, 568])
print("The maximun value is: {}, its position is {}".format(resp[0], resp[1]))
print(resp)
resp = wm(["abc", "xyz", "123"])
print("The maximun value is: {}, its position is {}".format(resp[0], resp[1]))
print(resp)
print(type(resp))
