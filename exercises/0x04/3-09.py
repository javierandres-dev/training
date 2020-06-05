""" Ejercicios de bucles
Escribir un programa que almacene la cadena de caracteres contraseña en una
variable, pregunte al usuario por la contraseña hasta que introduzca la
contraseña correcta. """
def my_code():
    a = "contraseña"
    b = input("Escribir contraseña: ")
    while b != a:
        b = input("Error.  Intente de nuevo\nEscribir contraseña: ")
    else:
        print("Correcto!")

my_code()