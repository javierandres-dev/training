""" Ejercicios de condicionales
Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al
sexo y el nombre. El grupo A esta formado por las mujeres con un nombre
anterior a la M y los hombres con un nombre posterior a la N y el grupo
B por el resto. Escribir un programa que pregunte al usuario su nombre
y sexo, y muestre por pantalla el grupo que le corresponde. """
def my_code():
    name = input("Nombre: ")
    gender = input("Género (hombre o mujer): ")
    if gender == "mujer":
        if name.lower() < "m":
            group = "A"
        else:
            group = "B"
        print(f"A {name} le corresponde el grupo {group}")
    elif gender == "hombre":
        if name.lower() > "n" :
            group = "A"
        else:
            group = "B"
        print(f"A {name} le corresponde el grupo {group}")
    else:
        print("Error: Género solo admite 'hombre' o 'mujer'")

my_code()