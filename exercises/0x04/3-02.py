""" Ejercicios de bucles
Escribir un programa que pregunte al usuario su edad y muestre por
pantalla todos los años que ha cumplido (desde 1 hasta su edad). """
def my_code():
    age = int(input("Edad: "))
    i = 1
    while(i <= age):
        print(f"Ha cumplido {i} años")
        i += 1

my_code()