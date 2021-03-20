# Una lista con valores [1, 2, 5, 25, 33, 56, 75, 21, 56, 89, 43, 13, 62, 24]
# Usar "in" y "print" para indicar si el número 21 está en la lista.
aList = [1, 2, 5, 25, 33, 56, 75, 21, 56, 89, 43, 13, 62, 24]
find = 21
if find in aList:
    print('Yes, {} is.'.format(find))
else:
    print("No, {} isn't.".format(find))
