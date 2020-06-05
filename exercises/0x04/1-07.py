""" Ejercicios de tipos de datos simples
Escribir un programa que pregunte al usuario
por el número de horas trabajadas y el coste por hora.
Después debe mostrar por pantalla la paga que le corresponde. """
def my_code():
    hours = int(input("Ingrese el número de horas trabajadas: "))
    cost = int(input("Ingrese el coste por hora: $"))
    result = hours * cost
    print(f"""La paga que le corresponde es: ${result}.
Equivalente a {hours} horas, a un coste por hora de ${cost}.""")

my_code()