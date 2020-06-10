'''Escribir una función que reciba una muestra de números en una lista y
devuelva un diccionario con su media, varianza y desviación típica.'''


def my_sol(_list):
    _dict = {}
    _dict['media'] = sum(_list)/len(_list)
    return _dict


_list1 = [1, 2, 3, 4, 5]
print(my_sol(_list1))
_list2 = [9, 8, 7, 6, 5]
print(my_sol(_list2))
