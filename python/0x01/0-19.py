# Crea un programa que pida tres números por teclado.
# El programa imprime en consola la media aritmética
# de los números introducidos.
print('Enter three numbers')
n1 = int(input('Enter first number: '))
n2 = int(input('Enter second number: '))
n3 = int(input('Enter third number: '))
average = (n1 + n2 + n3) / 3
print('The average of {}, {}, {} is: {}.'.format(n1, n2, n3, average))
