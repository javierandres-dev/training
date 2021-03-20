"""Escribir un programa que pregunte al usuario su nombre, edad, dirección y
teléfono y lo guarde en un diccionario. Después debe mostrar por pantalla el
mensaje <nombre> tiene <edad> años, vive en <dirección>
y su número de teléfono es <teléfono>."""


def my_sol():
    dicti = {}
    dicti['name'] = input('Nombre: ')
    dicti['age'] = input('Edad: ')
    dicti['add'] = input('dirección: ')
    dicti['phone'] = input('Teléfono: ')
    print('{} tiene {} años, vive en {} y su número de teléfono es {}'.
          format(dicti['name'], dicti['age'], dicti['add'], dicti['phone']))


my_sol()
