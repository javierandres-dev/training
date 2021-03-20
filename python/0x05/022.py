# Write a Python program to count the number 4 in a given list.
def fn(argv):
    aList = isinstance(argv, list)
    if aList:
        target = 4
        times = argv.count(target)
        return '"{}" is in "{}", "{}" times.'.format(target, argv, times)
    else:
        return "'{}' isn't a list.".format(argv)


print(fn([1, 4, 2, 4, 3, 4]))
print(fn([1, 4, 4, 4, 6, 4, 9, 44, 6, 2, 7, 4, 8, 3, 4, 5, 0]))
print(fn(8))
print(fn('Hi'))
print(fn([8]))
print(fn(['Hi']))
