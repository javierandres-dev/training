#!/usr/bin/env python3
""" Utilice el programa anterior para generar una tabla de conversión de
    temperaturas, desde 0º F hasta 120º F, de 10 en 10. """
for i in range(0, 121, 10):
    fahrenheit = i
    celsius = (fahrenheit - 32) * 5 / 9
    print(f"{fahrenheit} degrees Fahrenheit equals {celsius} degrees Celsius")
