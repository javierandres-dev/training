#!/usr/bin/env python3
"""
Write a Python program to display the current date and time.
"""
import datetime
now = datetime.datetime.now()
print("Current date and time :")
print(now.strftime("%Y-%m-%d %H:%M:%S"))
