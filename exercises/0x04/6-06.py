"""Escribir una función que reciba una muestra de números en una lista y
devuelva su media."""


def average(list_numbers):
    x = 0
    for number in list_numbers:
        x = x + number
    return x / len(list_numbers)


a_list = [1, 2, 3, 4, 5]
other_list = [21, 26, 33, 94, 58]
print(average(a_list))
print(average(other_list))
