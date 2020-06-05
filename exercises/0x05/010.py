#!/usr/bin/env python3
"""
 Write a Python program that accepts an integer (n)
 and computes the value of n+nn+nnn.
"""
n = int(input("Input an integer: "))
tmp = str(n)
tmp1 = tmp + tmp
tmp2 = tmp + tmp + tmp
result = n + int(tmp1) + int(tmp2)
print(result)
