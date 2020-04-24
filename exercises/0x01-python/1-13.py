""" Ejercicios de tipos de datos simples
Imagina que acabas de abrir una nueva cuenta de ahorros que te ofrece el 4%
de interés al año. Estos ahorros debido a intereses, que no se cobran hasta
finales de año, se te añaden al balance final de tu cuenta de ahorros.
Escribir un programa que comience leyendo la cantidad de dinero depositada en
la cuenta de ahorros, introducida por el usuario. Después el programa debe
calcular y mostrar por pantalla la cantidad de ahorros tras el primer, segundo
y tercer años. Redondear cada cantidad a dos decimales. """
def my_code():
    amount = float(input("Ingrese la cantidad de dinero depositado: $"))
    interest = 0.04
    balance = amount + (amount * interest)
    print(f"""Tras el primer año:\nSaldo inicial:\t{amount:.2f}
Intereses:\t{amount * interest:.2f}\nNuevo saldo:\t{balance:.2f}""")
    amount = balance
    balance = amount + (amount * interest)
    print(f"""Tras el segundo año:\nSaldo inicial:\t{amount:.2f}
Intereses:\t{amount * interest:.2f}\nNuevo saldo:\t{balance:.2f}""")
    amount = balance
    balance = amount + (amount * interest)
    print(f"""Tras el tercer año:\nSaldo inicial:\t{amount:.2f}
Intereses:\t{amount * interest:.2f}\nNuevo saldo:\t{balance:.2f}""")

my_code()