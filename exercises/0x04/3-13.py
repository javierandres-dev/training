""" Ejercicios de bucles
Escribir un programa que muestre el eco de todo lo que el usuario
introduzca hasta que el usuario escriba “salir” que terminará. """
def my_code():
    while True:
        sentence = input("Escriba: ")
        if sentence == "salir":
            break
        print(sentence)

my_code()