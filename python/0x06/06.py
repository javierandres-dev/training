""" Determinar y mostrar el promedio que ha obtenido un alumno en un
determinado curso, conociendo las notas de: tres prácticas, el examen parcial y
el examen final. """


def printAverage(practice1, practice2, practice3, partial, final):
    average_p = (practice1 + practice2 + practice3) / 3
    average = (average_p + 2 * partial + 3 * final) / 6
    print(average)


printAverage(4, 4, 4, 3, 5)
