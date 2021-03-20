"""Escribir una función que reciba una muestra de números en una lista y
devuelva otra lista con sus cuadrados."""


def my_sol(list1):
    list2 = []
    for i in list1:
        list2.append(i ** 2)
    return list2


a_list = [1, 2, 3, 4, 5]
print(my_sol(a_list))
other_list = [9, 8, 7, 6, 5]
print(my_sol(other_list))
