# Write a Python program to get the n (non-negative integer) copies of the
# first 2 characters of a given string.  Return the n copies of the whole
# string if the length is less than 2.
def fn(number, string):
    if number < 2:
        return string
    else:
        res = ''
        for i in range(number):
            res = res + string[:2]
        return res


print(fn(1, 'Hello, World!'))
print(fn(2, 'Hello, World!'))
print(fn(4, 'Hello, World!'))
print(fn(8, 'Hi'))
