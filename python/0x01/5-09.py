"""Escribir un programa que gestione las facturas pendientes de cobro de una
empresa. Las facturas se almacenarán en un diccionario donde la clave de cada
factura será el número de factura y el valor el coste de la factura.  El
programa debe preguntar al usuario si quiere añadir una nueva factura, pagar
una existente o terminar. Si desea añadir una nueva factura se preguntará por
el número de factura y su coste y se añadirá al diccionario.  Si se desea
pagar una factura se preguntará por el número de factura y se eliminará del
diccionario. Después de cada operación el programa debe mostrar por pantalla
la cantidad cobrada hasta el momento y la cantidad pendiente de cobro."""


def my_sol():
    invoices = {}
    receivable = 0
    paid = 0
    loop = True
    while loop is True:
        action = input('Seleccione: "1" Añadir, "2" Pagar, "3" Terminar. ')
        if action == '1':
            key = int(input('Añadir.  Digite el número de la factura.  N°: '))
            value = int(input('Digite el coste de la factura. $: '))
            receivable += value
            invoices[key] = value
        elif action == '2':
            key = int(input('Pagar.  Digite el número de la factura.  N°: '))
            if key in invoices:
                paid += invoices.get(key)
                invoices.pop(key)
            else:
                print('Número de factura no existe.')
        elif action == '3':
            loop = False
        else:
            print('Opción no válida.  Solo 1, 2 o 3.')
    total = receivable - paid
    print('--------\nCantidad cobrada: ', paid)
    print('Cantidad pendiente de cobro: ', total)


my_sol()
