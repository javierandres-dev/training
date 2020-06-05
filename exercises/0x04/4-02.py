""" Ejercicios de listas y tuplas
Escribir un programa que almacene las asignaturas de un curso
(por ejemplo Matemáticas, Física, Química, Historia y Lengua)
en una lista y la muestre por pantalla el mensaje Yo estudio <asignatura>,
donde <asignatura> es cada una de las asignaturas de la lista. """
def my_code():
    subject = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]
    for i in subject:
        print(f"Yo estudio {i}")

my_code()