""" Ejercicios de bucles
Escribir un programa que muestre por pantalla
la tabla de multiplicar del 1 al 10. """
def my_code():
    for i in range(1, 11):
        for j in range(1, 11):
            print(f"{i} x {j} = {i * j}")

my_code()