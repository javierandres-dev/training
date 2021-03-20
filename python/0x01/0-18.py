# Crea un programa que pida por teclado “Nombre”, “Dirección” y “Tfno”.
# Esos tres datos deberán ser almacenados en una lista y mostrar en consola
# el mensaje: “Los datos personales son: nombre dirección teléfono”
# (Se mostrarán los datos introducidos por teclado).
data = []
data.append(input('Enter name: '))
data.append(input('Enter address: '))
data.append(input('Enter number phone: '))
print('The personal data are: {}, {}, {}.'.format(data[0], data[1], data[2]))
