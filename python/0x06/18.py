""" Con el siguiente diccionario, debes crear un programa que pregunte al
usuario por un número; el programa debe imprimir el jugador al que hace
referencia ese número {1 : "Casillas", 15 : "Ramos",3 : "Pique", 5 : "Puyol",
11 : "Capdevila", 14 : "Xabi Alonso",16 : "Busquets", 8 : "Xavi Hernandez",
18 : "Pedrito", 6 : "Iniesta",7 : "Villa"} """
players = {
    1: "Casillas", 15: "Ramos", 3: "Pique", 5: "Puyol", 11: "Capdevila",
    14: "Xabi Alonso", 16: "Busquets", 8: "Xavi Hernandez", 18: "Pedrito",
    6: "Iniesta", 7: "Villa"
}
number = int(input('Ingrese un número: '))
if number in players:
    print(players[number])
else:
    print('Jugador no encontrado')
