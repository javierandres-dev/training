#!/usr/bin/env python3
""" Escribir un programa que le pida una palabra al usuario,
    para luego imprimirla 1000 veces, con espacios intermedios. """
word = input("Enter a word: ")
for i in range(1000):
    print(word, end=" ")
