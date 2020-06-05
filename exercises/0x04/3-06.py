""" Ejercicios de bucles
Escribir un programa que pida al usuario un número entero y muestre por
pantalla un triángulo rectángulo de altura el número introducido.
*
**
***
****
*****
como el de ejemplo. """
def my_code():
    n = int(input("Número entero: "))
    for i in range(1, n + 1, 1):
        print("*" * i)

my_code()