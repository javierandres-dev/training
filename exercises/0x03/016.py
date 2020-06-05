#!/usr/bin/env python3
print("----")
print("""Dos vehículos viajan a diferentes velocidades (v1 y v2) y están distanciados por una distancia d.
El que está detrás viaja a una velocidad mayor.  Se pide hacer un algoritmo para ingresar
la distancia entre los dos vehículos (km) y sus respectivas velocidades (km/h) y con esto
determinar y mostrar en que tiempo (minutos) alcanzará el vehículo más rápido al otro.""")
print("---")
d=int(input("Ingrese la distancia (km) entre los dos vehículos: "))
v1=int(input("Ingrese la velocidad (km/h)(mayor) del primer vehículo: "))
v2=int(input("Ingrese la velocidad (km/h)(menor) del segundo vehículo: "))
print("--")
if(v1>v2):
    t=d/(v1-v2)
    t=int(t*60)
    print("El segundo vehículo alcanzará al primer vehículo en {} minutos.".format(t))
else:
    print("La velocidad del primer vehículo es menor a la del segundo vehículo, no lo alcanzará.")
print("-")
