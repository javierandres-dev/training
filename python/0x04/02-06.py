#!/usr/bin/env python3
""" Escribir un programa que reciba un número n por parámetro e imprima los
    primeros n números triangulares, junto con su índice. Los números
    triangulares se obtienen mediante la suma de los números naturales desde
    1 hasta n. Es decir, si se piden los primeros 5 números triangulares, el
    programa debe imprimir:
        1 - 1
        2 - 3
        3 - 6
        4 - 10
        5 - 15
    Nota: hacerlo usando y sin usar la ecuación n ∗ (n + 1) / 2.
    ¿Cuál realiza más operaciones? """
number = int(input("Enter a integer number: "))
tn = 0
for n in range(1, number + 1):
    print(f"{n} - {int(n * (n + 1) / 2)}")
    tn += n
    print(f"{n} - {tn}\n")
