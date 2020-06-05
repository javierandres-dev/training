""" Ejercicios de listas y tuplas
Escribir un programa que pida al usuario una palabra
y muestre por pantalla el número de veces que contiene cada vocal. """
def my_code():
    word = input("Escriba una palabra: ")
    my_list = list(word)
    vowel = ["a", "e", "i", "o", "u"]
    print("En la palabra '{}':".format(word))
    for i in vowel:
        x = my_list.count(i)
        print("La vocal '{}' está: {} veces".format(i, x))

my_code()