""" Ejercicios de condicionales
Escribir un programa que pregunte al usuario su edad
y muestre por pantalla si es mayor de edad o no. """
def my_code():
    age = int(input("Ingrese su edad en cantidad de años: "))
    if age >= 18:
        print("Es mayor de edad.")
    else:
        print("Es menor de edad.")

my_code()