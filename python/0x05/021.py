# Write a Python program to find whether a given number (accept from the user)
# is even or odd, print out an appropriate message to the user.
def fn():
    argv = input('Enter a number: ')
    try:
        number = int(argv)
        if number % 2 == 0:
            res = 'even'
        else:
            res = 'odd'
        return '{} is {}'.format(number, res)
    except ValueError:
        return 'Value error'


print(fn())
