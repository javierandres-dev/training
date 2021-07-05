""" Crear un programa que tenga una variable con la cadena “Separado” y un
carácter de coma (,); e inserte el carácter entre cada letra de la cadena.
Ej: separar y , debería devolver s,e,p,a,r,a,r """


def insertChar(str, char):
    new_str = ''
    for i in str:
        new_str += i + char
    print(new_str[:-1])


insertChar('Separado', ',')
insertChar('separar', ',')
