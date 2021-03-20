""" Escribir un programa que imprima por pantalla todas las fichas de dominó,
    de una por línea y sin repetir. """
for i in reversed(range(7)):
    for j in range(i + 1):
        print(f"{i}|{j}")
