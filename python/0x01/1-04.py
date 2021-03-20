""" Ejercicios de tipos de datos simples
Escribir un programa que pregunte el nombre del usuario en la consola
y un número entero e imprima por pantalla en líneas distintas el nombre
del usuario tantas veces como el número introducido. """
def my_code():
    name = input("Ingrese el nombre del usuario: ")
    number = int(input("Ingrese un número entero: "))
    i = 0
    while(i < number):
        print(name)
        i += 1

my_code()