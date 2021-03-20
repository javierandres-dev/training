""" String methods """

normal = "Hello, World!"
lower = "hello, world!"
upper = "HELLO, WORLD!"
nonAscii = "My name is Ståle"
withTabs = "Hello\t World\t!"

resp = normal.capitalize()
# Converts the first character to upper case
print(resp)
resp = lower.capitalize()
print(resp)
resp = upper.capitalize()
print(resp)

resp = upper.casefold()
# Converts string into lower case
print(resp)

resp = normal.center(32)
# Returns a centered string
print(resp)

resp = normal.count('o')
# Returns the number of times a specified value occurs in a string
print(resp)

resp = nonAscii.encode()
# Returns an encoded version of the string
print(resp)
resp = normal.encode()
print(resp)

resp = normal.endswith('!')
# Returns true if the string ends with the specified value
print(resp)
resp = nonAscii.endswith('!')
print(resp)

resp = normal.expandtabs(4)
# Sets the tab size of the string
print(resp)
resp = withTabs.expandtabs(4)
print(resp)

resp = normal.find('o')
# Searches the string for a specified value and returns the first position of where it was found
print(resp)

"""
#aString = 'Hello, {}'
res = aString.format('Javi')
res = aString.index('o')
#aString = '12345678'
res = aString.isalnum()
#aString = 'abcdefgh'
res = aString.isalpha()
res = aString.isdecimal()
res = aString.isdigit()
#aString = 'Hi'
res = aString.isidentifier()
#aString = 'hello'
res = aString.islower()
res = aString.isnumeric()
res = aString.isprintable()
#aString = ''
#aString = ' '
res = aString.isspace()
res = aString.istitle()
#aString = 'HELLO'
res = aString.isupper()
res = '#'.join(aString)
res = aString.ljust(16)
#print(res, '...is cool')
res = aString.lower()
#aString = '        Hi        '
res = aString.lstrip()
res = aString.maketrans('H', 'J')
# print(aString.translate(res))
res = aString.partition(',')
res = aString.replace(',', '#')
res = aString.replace('World', 'Javi')
res = aString.rfind('o')
res = aString.rindex('o')
res = aString.rjust(16)
res = aString.rpartition(',')
res = aString.rsplit(',')
res = aString.rstrip()
res = aString.split(',')
res = aString.splitlines()
res = aString.startswith('H')
#aString = '        Hi        W'
res = aString.strip()
res = aString.swapcase()
#aString = 'hello, world!'
res = aString.title()
res = aString.upper()
res = aString.zfill(16)
print(res)
"""
