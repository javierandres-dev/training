""" Ejercicios de bucles
Escribir un programa que pida al usuario un número entero
y muestre por pantalla un triángulo rectángulo.
1
3 1
5 3 1
7 5 3 1
9 7 5 3 1
como el de ejemplo. """
def my_code():
    n = int(input("Número entero: "))
    for i in range(1, n + 1, 2):
        for j in range(i, 0, -2):
            print(j, end=" ")
        print(" ")

my_code()