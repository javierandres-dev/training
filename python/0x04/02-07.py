""" Escribir un programa que tome una cantidad m de valores ingresados por el
    usuario, a cada uno le calcule el factorial e imprima el resultado junto
    con el número de orden correspondiente. """


def getFactorial(number):
    """ returns the factorial of a given number """
    factorial = 1
    for n in reversed(range(number)):
        if n != 0:
            factorial += factorial * n
    return factorial


def allFactorials(m):
    """ prints factorials from one to an entered value """
    for number in range(m + 1):
        if number != 0:
            factorial = getFactorial(number)
            print("Number: {} => Factorial = {}".format(number, factorial))


allFactorials(int(input()))
