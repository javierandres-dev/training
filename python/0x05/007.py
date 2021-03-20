#!/usr/bin/env python3
"""
Write a Python program to accept a filename from
the user and print the extension of that.
"""
fil = input("Input the filename : ")
ext = fil.split(".")
print ("The extension of the file is : " + repr(ext[-1]))
