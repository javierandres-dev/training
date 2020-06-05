""" Ejercicios de bucles
Escribir un programa que pida al usuario una palabra
y luego muestre por pantalla una a una las letras de
la palabra introducida empezando por la última. """
def my_code():
    word = input("Ingrese una palabra ")
    print(word[::-1])
    print("----")
    for i in range(len(word)-1, -1, -1):
        print(word[i])

my_code()