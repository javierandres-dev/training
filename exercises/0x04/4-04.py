""" Ejercicios de listas y tuplas
Escribir un programa que pregunte al usuario los números ganadores de la
lotería primitiva, los almacene en una lista y los muestre por pantalla
ordenados de menor a mayor. """
def my_code():
    numbers = []
    for i in range(6):
        print("Ingrese un número ganador ")
        number = int(input())
        numbers.append(number)
    numbers.sort()
    print("Los números ganadores son: " + str(numbers))

my_code()