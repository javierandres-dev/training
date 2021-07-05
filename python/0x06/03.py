""" Crear un programa, que tenga una variable con la cadena “Te quiero solo
como amigo”, y muestre la siguiente información:
• Imprima los dos primeros caracteres.
• Imprima los tres últimos caracteres.
• Imprima dicha cadena cada dos caracteres.
• Dicha cadena en sentido inverso.
• Imprima la cadena en un sentido y en sentido inverso. """


def printString(str):
    print(str[0:2])
    print(str[-3:])
    print(str[::2])
    print(str[::-1])
    print(str + str[::-1])


printString('Te quiero solo como amigo')
