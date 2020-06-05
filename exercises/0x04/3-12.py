""" Ejercicios de bucles
Escribir un programa en el que se pregunte al usuario por una frase
y una letra, y muestre por pantalla el número de veces que aparece
la letra en la frase. """
def my_code():
    sentence = input("Ingrese una frase: ")
    letter = input("Ingrese una letra: ")
    time = 0
    for i in sentence:
        if i == letter:
            time += 1
    print(f"La letra '{letter}' aparece {time} veces en la frase '{sentence}'")

my_code()