#!/usr/bin/env python3
""" Escribir una función que reciba una lista ordenada y un elemento,
    si el elemento se encuentra en la lista, debe encontrar su posición,
    mediante búsqueda binaria y devolverlo. Si no se encuentra, debe agregarlo
    a la lista en la posición correcta y devolver esa nueva posición.
    (No utilizar lista.sort()) """


def fn(ol, el):
    flag = False
    lefth = 0
    right = len(ol)
    for i in range(len(ol)):
        middle = round(lefth + right / 2)
        if el == ol[middle]:
            flag = True
            print("{} is in position {}".format(el, middle))
            break
        if el > ol[middle]:
            lefth += 1
        if el < ol[middle]:
            right -= 1
    if flag == False:
        j = 0
        for i in range(1, len(ol)):
            if el < ol[i] and el > ol[j]:
                ol.insert(i, el)
                position = i
                break
            j += 1
        print("{} is in position {}".format(el, position))
    print(ol)


fn([1, 2, 3, 4, 5, 6, 7, 8, 9], 8)
fn([1, 2, 3, 4, 6, 7, 8, 9], 5)
