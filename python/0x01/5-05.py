"""Escribir un programa que almacene el diccionario con los créditos de las
asignaturas de un curso {'Matemáticas': 6, 'Física': 4, 'Química': 5} y
después muestre por pantalla los créditos de cada asignatura en el formato
<asignatura> tiene <créditos> créditos, donde <asignatura> es cada una de las
asignaturas del curso, y <créditos> son sus créditos.
Al final debe mostrar también el número total de créditos del curso."""


def my_sol():
    d = {'Matemáticas': 6, 'Física': 4, 'Química': 5}
    total = 0
    for key, value in d.items():
        print('La asignatura {} tiene {} créditos'.format(key, value))
        total = total + value
    print('El curso tiene un total de {} créditos.'.format(total))


my_sol()
