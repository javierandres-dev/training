""" Ejercicios de condicionales
Escribir un programa que almacene la cadena de caracteres contraseña en una
variable, pregunte al usuario por la contraseña e imprima por pantalla si la
contraseña introducida por el usuario coincide con la guardada en la variable
sin tener en cuenta mayúsculas y minúsculas. """
def my_code():
    password = "contraseña"
    compare = input("Ingrese la contraseña: ")
    if compare.lower() == password:
        print("Correcto!")
    else:
        print("Contraseña incorrecta")

my_code()