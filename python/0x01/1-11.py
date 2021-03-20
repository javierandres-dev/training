""" Ejercicios de tipos de datos simples
Escribir un programa que pregunte al usuario una cantidad a invertir,
el interés anual y el número de años, y muestre por pantalla
el capital obtenido en la inversión. """
def my_code():
    amount = float(input("Ingrese la cantidad a invertir: $"))
    interest = float(input("Ingrese el interés anual: %"))
    # interest = interest * 0.01
    interest = interest / 100 + 1
    years = int(input("Ingrese el número de años: "))
    profit = amount * (interest ** years)
    print(f"Capital obtenido en la inversión: {profit:.2f}")

my_code()