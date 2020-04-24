""" Ejercicios de listas y tuplas
Escribir un programa que almacene las asignaturas de un curso
(por ejemplo Matemáticas, Física, Química, Historia y Lengua) en una lista,
pregunte al usuario la nota que ha sacado en cada asignatura y elimine
de la lista las asignaturas aprobadas.  Al final el programa debe mostrar
por pantalla las asignaturas que el usuario tiene que repetir. """
def my_code():
    subjects = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]
    approved = []
    for subject in subjects:
        score = int(input("¿Qué nota sacó en {}? ".format(subject)))
        if score > 3:
            approved.append(subject)
    for subject in approved:
        subjects.remove(subject)
    print("Debe repetir las siguientes asignaturas: {}".format(subjects))

my_code()