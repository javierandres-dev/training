"""Escribir un programa que guarde en una variable el diccionario
{'Euro':'€', 'Dollar':'$', 'Yen':'¥'}, pregunte al usuario por una divisa
y muestre su símbolo o un mensaje de aviso si
la divisa no está en el diccionario."""


def my_sol(a_dictionary):
    currency = input('Divisa: ')
    for key, value in a_dictionary.items():
        if key == currency:
            return print('Símbolo: {}'.format(value))
    return print('¡Opps!  Divisa no encontrada.')


a_dictionary = {'Euro': '€', 'Dollar': '$', 'Yen': '¥'}
my_sol(a_dictionary)
