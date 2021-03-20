""" Anterior: Escribir un programa que imprima por pantalla todas las
    fichas de dominó, de una por línea y sin repetir.
        for i in reversed(range(7)):
            for j in range(i + 1):
                print(f"{i}|{j}")
    Modificar el programa anterior para que pueda generar fichas de un juego
    que puede tener números de 0 a n. """
n = int(input())
for i in reversed(range(n + 1)):
    for j in range(i + 1):
        print(f"{i}|{j}")
