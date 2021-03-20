""" Write a Python program to calculate the sum of three given numbers,
if the values are equal then return three times of their sum. """
def my_func(a,b,c):
    if a == b and b == c:
        return (a+b+c)*3
    else:
        return a+b+c

print(my_func(10,10,10))
print(my_func(10,20,30))
print(my_func(3,3,3))
print(my_func(1,2,3))