"""Escribir una función que calcule el área de un círculo y otra que calcule
el volumen de un cilindro usando la primera función."""
from math import pi


def area_circle(radius):
    return pi * (radius * radius)


def volume_cylinder(radius, height):
    return (pi * (radius * radius)) * height


print(area_circle(8))
print(volume_cylinder(8, 16))
