# Escribir una función que calcule el máximo común divisor de
# dos números y otra que calcule el mínimo común múltiplo.


def mcd(a, b):
    # Long way
    aList = []
    bList = []
    cList = []
    for i in range(1, a + 1):
        if a % i == 0:
            aList.append(i)
    for i in range(1, b + 1):
        if b % i == 0:
            bList.append(i)
    for i in aList:
        for j in bList:
            if i == j:
                cList.append(j)
    res = max(cList)
    print(f'El Máximo Común Divisor (MCD) de {a} y {b} es: {res}')


def mcm(a, b):
    # Long way
    aList = []
    bList = []
    cList = []
    for i in range(1, 11):
        aList.append(a * i)
    for i in range(1, 11):
        bList.append(b * i)
    for i in aList:
        for j in bList:
            if i == j:
                cList.append(j)
    res = min(cList)
    print(f'el Mínimo Común Múltiplo (MCM) de {a} y {b} es: {res}')


def primeNumber(number):
    # Determine if a number is prime
    countFactors = 0
    for factor in range(1, number + 1):
        if number % factor == 0:
            countFactors += 1
    if countFactors == 2:
        return True
    else:
        return False


def primeNumberList(limit):
    # Create a prime numbers list according parameter
    primeList = []
    for number in range(2, limit + 1):
        if primeNumber(number) is True:
            primeList.append(number)
    return (primeList)


def gcf(a, b):
    rest = 0
    while(b > 0):
        rest = b
        b = a % b
        a = rest
    return a


def lcm(a, b):
    if a > b:
        greater = a
    else:
        greater = b
    while (greater % a != 0) or (greater % b != 0):
        greater += 1
    return greater


# Tests
mcd(4, 6)
print(gcf(4, 6))
mcm(4, 6)
print(lcm(4, 6))
mcd(18, 24)
print(gcf(18, 24))
mcm(18, 24)
print(lcm(18, 24))
mcd(3, 9)
print(gcf(3, 9))
mcm(3, 9)
print(lcm(3, 9))
mcd(21, 7)
print(gcf(21, 7))
mcm(21, 7)
print(lcm(21, 7))
mcd(24, 36)
print(gcf(24, 36))
mcm(24, 36)
print(lcm(24, 36))
