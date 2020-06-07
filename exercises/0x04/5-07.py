"""Escribir un programa que cree un diccionario simulando una cesta de la
compra. El programa debe preguntar el artículo y su precio y añadir el par al
diccionario, hasta que el usuario decida terminar. Después se debe mostrar por
pantalla la lista de la compra y el coste total."""


def my_sol():
    d = {}
    more = 'si'
    while more == 'si':
        key = input('Nombre del artículo: ')
        value = int(input('Precio: '))
        d[key] = value
        more = input('Si desea agregar otro artículo digite: si ')
    total = 0
    print('Lista de la compra')
    for key, value in d.items():
        print('{}\t{}'.format(key, value))
        total = total + value
    print('--------\nTotal\t{}'.format(total))


my_sol()
