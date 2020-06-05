""" Ejercicios de condicionales
Escribir un programa que pida al usuario dos números y muestre por pantalla
su división. Si el divisor es cero el programa debe mostrar un error. """
def my_code():
    n1 = int(input("Ingrese el dividendo: "))
    n2 = int(input("Ingrese el divisor: "))
    if n2 == 0:
        print("Error: Ingresó 0 como divisor.")
    else:
        result = n1 / n2
        print(f"{n1} / {n2} = {result}")

my_code()