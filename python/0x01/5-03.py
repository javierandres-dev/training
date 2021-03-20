"""Escribir un programa que guarde en un diccionario los precios de las frutas
de la tabla, pregunte al usuario por una fruta, un número de kilos y muestre
por pantalla el precio de ese número de kilos de fruta. Si la fruta no está en
el diccionario debe mostrar un mensaje informando de ello."""


def my_sol():
    priceFruits = {'Plátano': 1.35, 'Manzana': 0.80,
                   'Pera': 0.85, 'Naranja': 0.70}
    exist = False
    name = input('Fruta: ')
    for key, value in priceFruits.items():
        if key == name:
            exist = True
            weight = int(input('Peso (Kilos): '))
            total = value * weight
    if exist:
        print('El precio de {} Kilos de {} es: {}'.format(weight, name, total))
    else:
        print('No tenemos {}'.format(name))


my_sol()
