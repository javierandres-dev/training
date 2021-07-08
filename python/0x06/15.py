""" Escribir una tupla con los meses del año, luego, pide al usuario un numero,
el que haya ingresado, es el mes que debe mostrar en la tupla """
months = ('january', 'february', 'march', 'april', 'may', 'june',
          'july', 'august', 'september', 'october', 'november', 'december')
number = int(input('Ingese un número: ')) - 1
print(months[number])
print(type(months[number]))
