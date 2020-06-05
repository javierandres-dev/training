""" Ejercicios de tipos de datos simples
Escribir un programa que pida al usuario su peso (en kg) y estatura
(en metros), calcule el índice de masa corporal y lo almacene en una variable,
y muestre por pantalla la frase Tu índice de masa corporal es <imc> donde <imc>
es el índice de masa corporal calculado redondeado con dos decimales. """
def my_code():
    weight = float(input("Introducir peso del usuario (en kg): "))
    height = float(input("Introducir estatura del usuario (en metros): "))
    bmi = weight / ((height) ** 2)
    print("Tu índice de masa corporal es: {:.2f}".format(bmi))

my_code()