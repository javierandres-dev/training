"""Escribir una función que reciba un número entero positivo y devuelva su
factorial."""


def factorial(n):
    fn = 1
    for i in range(n):
        fn *= i + 1
    return fn


n = int(input('Número entero positivo: '))
print(factorial(n))
