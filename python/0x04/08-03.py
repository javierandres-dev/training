#!/usr/bin/env python3
""" Escribir una función que reciba una cadena a buscar y una lista de tuplas
    (nombre_completo, telefono), y busque dentro de la lista, todas las
    entradas que contengan en el nombre completo la cadena recibida
    (puede ser el nombre, el apellido o sólo una parte de cualquiera de ellos).
    Debe devolver una lista con todas las tuplas encontradas. """


def fn(name, tuple_list):
    new_tuple_list = []
    for item in tuple_list:
        found = item[0].find(name)
        if found >= 0:
            new_tuple_list.append(item)
    print("Input: {}\nMatches list: {}\n".format(name, new_tuple_list))


tl = [
    ("Yosef Suarez", 5817994),
    ("Mireya Russo", 5817994),
    ("Carsen Vasquez", 2648532),
    ("Logan Conrad", 2365764),
    ("Asa Gray", 9949392),
    ("Shea Berg", 5307491),
    ("Stephen Goodwin", 2331745),
    ("Siena Bowman", 6421478),
    ("Ramon Brandt", 7363633),
    ("Mayra Robertson", 9277282),
    ("Alexis Gomez", 8187310),
    ("Marie Prince", 5096024),
    ("Aldo Diaz", 3349592),
    ("Rodney Carey", 4692283),
    ("Carmen Cooper", 6775301),
    ("Jayla Hunt", 9944447)]
fn("Mireya", tl)
fn("Prince", tl)
fn("Mayra Robertson", tl)
fn("Logan", tl)
fn("oo", tl)
fn("sa Gra", tl)
fn(" ", tl)
fn("Suarez", tl)
fn("n ", tl)
fn("R", tl)
fn("Gomez", tl)
fn("a B", tl)
fn("ney", tl)
fn("B", tl)
fn(" D", tl)
fn("Car", tl)
