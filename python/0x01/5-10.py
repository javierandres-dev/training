"""Escribir un programa que permita gestionar la base de datos de clientes de
una empresa. Los clientes se guardarán en un diccionario en el que la clave de
cada cliente será su NIF, y el valor será otro diccionario con los datos del
cliente (nombre, dirección, teléfono, correo, preferente), donde preferente
tendrá el valor True si se trata de un cliente preferente. El programa debe
preguntar al usuario por una opción del siguiente menú: (1) Añadir cliente,
(2) Eliminar cliente, (3) Mostrar cliente, (4) Listar todos los clientes,
(5) Listar clientes preferentes, (6) Terminar.
En función de la opción elegida el programa tendrá que hacer lo siguiente:
1. Preguntar los datos del cliente, crear un diccionario con los datos y
añadirlo a la base de datos.
2. Preguntar por el NIF del cliente y eliminar sus datos de la base de datos.
3. Preguntar por el NIF del cliente y mostrar sus datos.
4. Mostrar lista de todos los clientes de la base datos con su NIF y nombre.
5. Mostrar la lista de clientes preferentes de la base de datos con su
NIF y nombre.
6. Terminar el programa."""


def my_sol():
    clients = {}
    loop = True
    while loop is True:
        menu = """
        (1) Añadir cliente
        (2) Eliminar cliente
        (3) Mostrar cliente
        (4) Listar todos los clientes
        (5) Listar clientes preferentes
        (6) Terminar.
        """
        print('-------- Seleccione una opción: {}'.format(menu))
        action = input()
        if action == '1':
            print('---- Añadir cliente ----')
            nif = input('NIF: ')
            name = input('Nombre: ')
            address = input('Dirección: ')
            phone = input('Teléfono: ')
            email = input('Correo electrónico: ')
            preferential = input('¿Es un cliente preferente? (s/n): ')
            client = {'nombre': name, 'dirección': address,
                      'teléfono': phone, 'correo electrónico': email,
                      'preferente': preferential == 's'}
            clients[nif] = client
        elif action == '2':
            print('---- Eliminar cliente ----')
            nif = input('NIF: ')
            if nif in clients:
                clients.pop(nif)
                print('-- Hecho --')
            else:
                print('Error: NIF no encontrado.')
        elif action == '3':
            print('---- Mostrar cliente ----')
            nif = input('NIF: ')
            if nif in clients:
                client = clients.get(nif)
                for key, value in client.items():
                    print(key.title(), ': ', value)
            else:
                print('Error: NIF no encontrado.')
        elif action == '4':
            print('---- Listar todos los clientes ----')
            for key, value in clients.items():
                print(key, ': ', value['nombre'])
        elif action == '5':
            print('---- Listar clientes preferentes ----')
            for key, value in clients.items():
                if value['preferente']:
                    print(key, ': ', value['nombre'])
        elif action == '6':
            loop = False
        else:
            print('Opción no válida.')


my_sol()
