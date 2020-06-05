""" Ejercicios de listas y tuplas
Escribir un programa que pida al usuario una palabra
y muestre por pantalla si es un palíndromo. """
def my_code():
    word = input("Ingrese una palabra: ")
    check = (word)[::-1]
    if word == check:
        r = "si"
    else:
        r = "no"
    print("La palabra '{}' {} es un palíndromo".format(word, r))

my_code()