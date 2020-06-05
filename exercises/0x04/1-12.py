""" Ejercicios de tipos de datos simples
Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas.
Suele hacer venta por correo y la empresa de logística les cobra por peso de
cada paquete así que deben calcular el peso de los payasos y muñecas que
saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g.
Escribir un programa que lea el número de payasos y muñecas vendidos en el
último pedido y calcule el peso total del paquete que será enviado. """
w_clown = 112
w_doll = 75
def my_code():
    print("Ingrese el número de payasos a enviar: ")
    n_clown = int(input())
    print("Ingrese el número de muñecas a enviar: ")
    n_doll = int(input())
    w_package = (w_clown * n_clown) + (w_doll * n_doll)
    print("El peso total del paquete a enviar es de: {} g.".format(w_package))

my_code()