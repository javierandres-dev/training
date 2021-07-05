""" Crear un programa que permita al usuario elegir un candidato por el cual
votar. Las posibilidades son: candidato A por el partido rojo, candidato B por
el partido verde, candidato C por el partido azul. Según el candidato elegido
(A, B ó C) se le debe imprimir el mensaje “Usted ha votado por el partido
[color que corresponda al candidato elegido]”. Si el usuario ingresa una opción
que no corresponde a ninguno de los candidatos disponibles, indicar “Opción
errónea”. """
print("""LISTA DE CANDIDATOS
\tA por el partido rojo
\tB por el partido verde
\tC por el partido azul
""")
candidate = input('Elija un candidato por el cual votar (A, B, ó C): ').upper()
if candidate == 'A':
    party = 'rojo'
elif candidate == 'B':
    party = 'verde'
elif candidate == 'C':
    party = 'azul'
else:
    party = False
print('Usted ha votado por el partido {}'.format(
    party) if party else 'Opción errónea')
