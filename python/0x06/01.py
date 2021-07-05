""" Programa que realice la operación aritmética: (3 + 2 / 2 x 5)^2 """


def firstSolution():
    return ((3 + 2) / (2 * 5)) ** 2


def secondSolution():
    return pow((3 + 2) / (2 * 5), 2)


print(firstSolution())
print(secondSolution())
