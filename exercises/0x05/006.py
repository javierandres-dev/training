#!/usr/bin/env python3
"""
Write a Python program which accepts a sequence of comma-separated numbers
from user and generate a list and a tuple with those numbers.
"""
num = input("Input a sequence of comma-separated numbers : ")
lis = num.split(",")
print("List : ", lis)
tup = tuple(lis)
print("Tuple : ", tup)
