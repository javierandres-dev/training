"""
Escribir un programa que, dado un número entero, muestre su valor absoluto
"""
number = int(input('Ingrese un número entero: '))
print(number if number > -1 else number * -1)
