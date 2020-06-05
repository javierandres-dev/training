""" Ejercicios de condicionales
Para tributar un determinado impuesto se debe ser mayor de 16 años y tener
unos ingresos iguales o superiores a 1000 € mensuales. Escribir un programa
que pregunte al usuario su edad y sus ingresos mensuales y muestre por
pantalla si el usuario tiene que tributar o no. """
def my_code():
    age = int(input("Edad: "))
    income = int(input("Ingresos mensuales: €"))
    if age > 16 and income >= 1000:
        print("Si, debe tributar")
    else:
        print("No, no debe tributar")

my_code()