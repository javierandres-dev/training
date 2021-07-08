""" Escribir una tupla que tenga las letras del alfabeto. Luego, debes pedir al
usuario un número, el que haya ingresado, es la letra que debe imprimir el
programa """
from string import ascii_lowercase
alphabet = tuple(ascii_lowercase)
number = int(input('Ingrese un número: ')) - 1
print(alphabet[number])
