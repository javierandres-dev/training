"""Escribir una función a la que se le pase una cadena <nombre> y muestre por
pantalla el saludo ¡hola <nombre>!.!!!"""


def greet(name):
    return('Hola {}!'.format(name))


name = input('Nombre: ')
print(greet(name))
