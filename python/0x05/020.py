# Write a Python program to get a string which is n (non-negative integer)
# copies of a given string.
def fn(string, number):
    copies = []
    for i in range(number):
        copies.append(string)
    for string in copies:
        print(string)


fn('Hello, World!', 4)
print('--------')
fn('Hello, World!', 8)
