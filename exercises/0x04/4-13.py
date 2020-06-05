""" Ejercicios de listas y tuplas
Escribir un programa que pregunte por una muestra de números,
separados por comas, los guarde en una tupla y muestre
por pantalla su media y desviación típica. """
def my_code():
    numbers = input("Introduce una muestra de números separados por comas: ")
    numbers = numbers.split(',')
    length = len(numbers)
    for i in range(length):
        numbers[i] = int(numbers[i])
    numbers = tuple(numbers)
    sum = 0
    sumsq = 0
    for i in numbers:
        sum += i
        sumsq += i**2
    mean = sum/length
    stdev = (sumsq/length-mean**2)**(1/2)
    print('La media es', mean, ', y la desviación típica es', stdev)

my_code()