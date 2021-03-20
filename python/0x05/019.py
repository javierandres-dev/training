# Write a Python program to get a new string from a given string
# where "Is" has been added to the front. If the given string already
# begins with "Is" then return the string unchanged.
def fn(argv):
    if (argv.startswith('Is')):
        print(argv)
    else:
        print('Is{}'.format(argv))


fn('Is a question?')
fn("Hello, World!")
