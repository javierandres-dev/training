'''Escribir una función que reciba una muestra de números en una lista y
devuelva un diccionario con su media, varianza y desviación típica.'''


def fn(_list):
    _len = len(_list)
    media = sum(_list)/_len
    cuadrados = []
    for i in _list:
        cuadrados.append(i ** 2)
    varianza = sum(cuadrados)/_len-(media ** 2)
    des_tip = varianza ** 0.5
    _dict = {}
    _dict['media'] = media
    _dict['varianza'] = varianza
    _dict['desviación típica'] = des_tip
    return _dict


_list1 = [1, 2, 3, 4, 5]
print(fn(_list1))
_list2 = [2.3, 5.7, 6.8, 9.7, 12.1, 15.6]
print(fn(_list2))
