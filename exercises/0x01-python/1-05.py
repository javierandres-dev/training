""" Ejercicios de tipos de datos simples
Escribir un programa que pregunte el nombre del usuario en la consola
y después de que el usuario lo introduzca muestre por pantalla <NOMBRE>
tiene <n> letras, donde <NOMBRE> es el nombre de usuario en mayúsculas
y <n> es el número de letras que tienen el nombre. """
def my_code():
    name = input("Ingrese el nombre del usuario: ")
    name = name.upper()
    letters = len(name)
    print(f"{name} tiene {letters} letras.")

my_code()