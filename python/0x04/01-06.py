#!/usr/bin/env python3
""" Implementar algoritmos que permitan:
    1. Calcular el perímetro y área de un rectángulo dada su base y su altura.
    2. Calcular el perímetro y área de un círculo dado su radio.
    3. Calcular el volumen de una esfera dado su radio.
    4. Calcular el área de un rectángulo (alineado con los ejes x e y)
    dadas sus coordenadas x1, x2, y1, y2.
    4. Dados los catetos de un triángulo rectángulo, calcular su hipotenusa.
"""
import math


def rectangle(base, height):
    area = base * height
    perimeter = base + height + base + height
    print("Rectangle: Base = {}, Height = {}\n\
    Area = {}, Perimeter = {}".format(base, height, area, perimeter))


def circle(radio):
    pi = 3.1416
    area = pi * (radio * radio)
    perimeter = (pi * radio) * 2
    print("Circle: Radio = {}\n\
    Area = {}, Perimeter = {}".format(radio, area, perimeter))


def sphere(radio):
    pi = 3.1416
    volume = 4 / 3 * pi * (radio * radio * radio)
    print("Sphere: Radio = {}\n\tVolume = {}".format(radio, volume))


def rectanglexxyy(x1, x2, y1, y2):
    xxyy = [x1, x2, y1, y2]
    coordinates = []
    for a_str in xxyy:
        a_list = tuple(map(int, a_str.split(",")))
        coordinates.append(a_list)
    coordinates.sort()
    a = coordinates[0]
    b = coordinates[1]
    c = coordinates[2]
    d = coordinates[3]
    x = (c[0] + d[0]) - (a[0] + b[0])
    y = (b[1] + d[1]) - (a[1] + c[1])
    base = x / 2
    height = y / 2
    area = base * height
    print("Rectangle: Base = {}, Height = {}\n\
    Area = {}".format(base, height, area))


def triangle(cat1, cat2):
    hipotenuse = math.sqrt((cat1 * cat1) + (cat2 * cat2))
    print("Triangle: Catet one = {}, Catet two = {}\n\
    Hipotenuse = {}".format(cat1, cat2, hipotenuse))


rectangle(16, 4)
circle(8)
sphere(2)
rectanglexxyy("7,1", "5,1", "5,6", "7,6")
rectanglexxyy("-4,-3", "-4,1", "3,1", "3,-3")
triangle(3, 9)
