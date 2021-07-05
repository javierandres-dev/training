""" Una juguetería tiene mucho éxito en dos de sus productos: payasos y
muñecas. Suele hacer venta por correo y la empresa de logística les cobra por
peso de cada paquete, así que deben calcular el peso de los payasos y muñecas
que saldrán en cada paquete a demanda. Cada payaso pesa 112g y cada muñeca 75g.
Un cliente frecuente pide la cantidad de 23 payasos y 54 muñecas, realiza un
programa que muestre el peso total de toda la venta. """


def weightSale(n_clowns, n_dolls):
    weight_clown = 112
    weight_doll = 75
    weight_sale = (n_clowns * weight_clown) + (n_dolls * weight_doll)
    return weight_sale


print(weightSale(5, 3))
print(weightSale(23, 54))
