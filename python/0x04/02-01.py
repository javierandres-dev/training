#!/usr/bin/env python3
""" Ciclos definidos
    1. Escribir un ciclo definido para imprimir por pantalla todos los números
    entre 10 y 20.
    2. Escribir un ciclo definido que salude por pantalla a sus cinco mejores
    amigos/as.
    3. Escribir un programa que use un ciclo definido con rango numérico,
    que pregunte los nombres de sus cinco mejores amigos/as, y los salude.
    4. Escribir un programa que use un ciclo definido con rango numérico,
    que pregunte los nombres de sus seis mejores amigos/as, y los salude.
    5. Escribir un programa que use un ciclo definido con rango numérico,
    que averigue a cuántos amigos quieren saludar, les pregunte los nombres
    de esos amigos/as, y los salude. """
for number in range(10, 21):
    print(number)
friends = ["Books", "Internet", "Documentation", "Discipline", "Persistence"]
for friend in friends:
    print(f"Hello, {friend}")
friends = []
for i in range(6):
    friend = input("Enter name of your friend: ")
    friends.append(friend)
for friend in friends:
    print(f"Hello, {friend}")
how_many = int(input("How many friend do you want greet?: "))
friends = []
i = 0
while(i < how_many):
    friend = input("Enter name of your friend: ")
    friends.append(friend)
    i += 1
for friend in friends:
    print(f"Hello, {friend}")
