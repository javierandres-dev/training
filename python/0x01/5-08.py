"""Escribir un programa que cree un diccionario de traducción español-inglés
El usuario introducirá las palabras en español e inglés separadas por dos
puntos, y cada par <palabra>:<traducción> separados por comas.
El programa debe crear un diccionario con las palabras y sus traducciones.
Después pedirá una frase en español y utilizará el diccionario para
traducirla palabra a palabra.
Si una palabra no está en el diccionario debe dejarla sin traducir."""


def my_sol():
    d = {}
    print("""
    Intruduzca cada par de <palabra>:<traducción> separadas por coma.
    ejemplo:example, otro:other, algo:something, etc:etc
    """)
    s = input()
    for i in s.split(', '):
        key, value = i.split(':')
        d[key] = value
    spanish = input('Introduce una frase o palabra en español: ')
    for i in spanish.split():
        if i in d:
            print(d[i], end=' ')
        else:
            print(i, end=' ')


my_sol()
