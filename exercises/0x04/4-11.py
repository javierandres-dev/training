""" Ejercicios de listas y tuplas
Escribir un programa que almacene los vectores (1,2,3) y (-1,0,2)
en dos tuplas y muestre por pantalla su producto escalar. """
def my_code():
    a = (1,2,3)
    b = (-1,0,2)
    r = 0
    for i in range(len(a)):
        r += a[i] * b[i]
    print("El producto escalar entre los vectores:\n'a = {}'\n'b = {}'\nes: {}".format(a, b, r))

my_code()