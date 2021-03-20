#!/usr/bin/env python3
print("----")
print("""Un alumno desea saber cual será su calificación final en la materia de Algoritmos.
Dicha calificación se compone de los siguientes porcentajes:
55% del promedio de sus tres calificaciones parciales.
30% de la calificación del examen final.
15% de la calificación de un trabajo final.""")
print("---")
cp1=float(input("Ingresa la primera calificación parcial: "))
cp2=float(input("Ingresa la segunda calificación parcial: "))
cp3=float(input("Ingresa la tercera calificación parcial: "))
cef=float(input("Ingresa la calificación del examen final: "))
ctf=float(input("Ingresa la calificación del trabajo final: "))
pcp=(cp1+cp2+cp3)/3
cf=((pcp*(0.55))+(cef*(0.30))+(ctf*(0.15)))
print("--")
print("Tu calificación final es: {:.2f}".format(cf))
print("-")
