# Crea un programa que pida dos números por teclado.
# El programa tendrá una función llamada “DevuelveMax”
# encargada de devolver el número más alto de los dos introducidos.
a = int(input('Enter firts number: '))
b = int(input('Enter second number: '))


def DevuelveMax(a, b):
    if a > b:
        largest = a
    elif b > a:
        largest = b
    else:
        largest = "Are equals"
    return ('The largest number is: {}.'.format(largest))


print(DevuelveMax(a, b))
