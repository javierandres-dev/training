from datetime import date
"""Write a Python program to calculate number of days between two dates.
Sample dates : (2014, 7, 2), (2014, 7, 11)"""
d0 = date(2014, 7, 2)
d1 = date(2014, 7, 11)
dd = d1 - d0
print(f"{dd.days} days of difference")