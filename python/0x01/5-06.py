"""Escribir un programa que cree un diccionario vacío y lo vaya llenado con
información sobre una persona (por ejemplo nombre, edad, sexo, teléfono,
correo electrónico, etc.) que se le pida al usuario. Cada vez que se añada
un nuevo dato debe imprimirse el contenido del diccionario."""


def my_sol():
    a_dictionary = {}
    a_list = ['nombre', 'apellido', 'edad', 'genero', 'teléfono', 'correo']
    for i in a_list:
        a_dictionary[i] = input('Ingrese su {}: '.format(i))
        print(a_dictionary)


my_sol()


def proposed_sol():
    person = {}
    more = 'Si'
    while more == 'Si':
        key = input('¿Qué dato quieres introducir? ')
        value = input(key + ': ')
        person[key] = value
        print(person)
        more = input('¿Quieres añadir más información (Si/No)? ')


proposed_sol()
