""" Ejercicios de listas y tuplas
Escribir un programa que almacene el abecedario en una lista,
elimine de la lista las letras que ocupen posiciones múltiplos de 3,
y muestre por pantalla la lista resultante. """
import string
def my_code():
    my_list = list(string.ascii_lowercase)
    for i in range(len(my_list), 1, -1):
        if i % 3 == 0:
            my_list.pop(i-1)
    print(my_list)

my_code()