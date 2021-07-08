""" Escribe una lista que tenga los números de 1 al 10. Luego, debes hacer que
los datos que están en las posiciones 4, 7 y 9 sean multiplicados por 2; por
último, mostrar la lista nueva con los nuevos datos """
list = []
for number in range(1, 11):
    list.append(number)
print(list)
for idx in range(0, len(list)):
    if idx == 4 or idx == 7 or idx == 9:
        list[idx] = list[idx] * 2
print(list)
