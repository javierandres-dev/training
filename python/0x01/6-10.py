# Escribir una función que convierta un número decimal en
# binario y otra que convierta un número binario en decimal.
aDecimal = int(input('Enter a decimal number: '))
aBinary = input('Enter a binary number: ')


def decimalToBinary(argv):
    res = (bin(argv).replace('0b', ''))
    return ('The binary number of {} is: {}.'.format(argv, res))


def binaryToDecimal(argv):
    res = int(argv, 2)
    return ('The decimal number of {} is: {}.'.format(argv, res))


print(decimalToBinary(aDecimal))
print(binaryToDecimal(aBinary))
