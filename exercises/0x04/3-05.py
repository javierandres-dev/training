""" Ejercicios de bucles
Escribir un programa que pregunte al usuario una cantidad a invertir, el
interés anual y el número de años, y muestre por pantalla el capital obtenido
en la inversión cada año que dura la inversión. """
def my_code():
    amount = int(input("Cantidad a invertir: "))
    interest = (int(input("Interés: %")) / 100)
    years = int(input("Años: "))
    i = 1
    while i <= years:
        profit = amount * interest
        balance = amount + profit
        print(f"Año {i}\nInversión:\t{amount}\nRendimiento:\t{profit}\nNuevo saldo\t{balance}")
        amount = balance
        i += 1

my_code()