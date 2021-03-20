#!/usr/bin/env python3
""" Se cuenta con una lista ordenada de productos, en la que uno consiste en
    una tupla de (identificador, descripción, precio), y una lista de los
    productos a facturar, en la que cada uno consiste en una tupla de
    (identificador, cantidad).
    Se desea generar una factura que incluya la cantidad, la descripción, el
    precio unitario y el precio total de cada producto comprado, y al final
    imprima el total general.
    Escribir una función que reciba ambas listas e imprima por pantalla la
    factura solicitada.
"""


def fn(available_products, check_in_products):
    cart = []
    total = 0
    for cip in check_in_products:
        for ap in available_products:
            if cip[0] == ap[0]:
                amount = cip[1]
                description = ap[1]
                unit_price = ap[2]
                subtotal = unit_price * amount
                purchase = (amount, description, unit_price, subtotal)
                cart.append(purchase)
    print("---- INVOICE ----")
    for purchase in cart:
        print("Quantity: {}\tDescription: {}\tUnit price: {}\tSubtotal: {}\
        ".format(purchase[0], purchase[1], purchase[2], purchase[3]))
        total += purchase[3]
    print("Total:\t{}".format(total))


products = [
    (1, "chassis", 200),
    (2, "board", 170),
    (3, "processor", 290),
    (4, "memory", 70),
    (5, "storage", 100),
    (6, "monitor", 520),
    (7, "keyboard", 99),
    (8, "mouse", 21)
    ]

fn(products, [
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 1),
    (5, 1),
    (6, 1),
    (7, 1),
    (8, 1)
    ])

fn(products, [
    (1, 2),
    (2, 2),
    (3, 2),
    (4, 2),
    (5, 2),
    (6, 2),
    (7, 2),
    (8, 2)
    ])

fn(products, [
    (1, 10),
    (2, 10),
    (3, 10),
    (4, 10),
    (5, 10),
    (6, 10),
    (7, 10),
    (8, 10)
    ])

fn(products, [
    (3, 2),
    (6, 9),
    ])
