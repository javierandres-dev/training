""" Ejercicios de listas y tuplas
Escribir un programa que almacene las asignaturas de un curso
(por ejemplo Matemáticas, Física, Química, Historia y Lengua) en una lista,
pregunte al usuario la nota que ha sacado en cada asignatura, y después
las muestre por pantalla con el mensaje En <asignatura> has sacado <nota>
donde <asignatura> es cada una des las asignaturas de la lista y <nota>
cada una de las correspondientes notas introducidas por el usuario. """
def my_code():
    subjects = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]
    scores = []
    for subject in subjects:
        print(f"¿Qué nota sacó en {subject}?")
        score = input("")
        scores.append(score)
    for i in range(len(subjects)):
        print("En " + subjects[i] + " has sacado " + scores[i])

my_code()