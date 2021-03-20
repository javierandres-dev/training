""" Ejercicios de tipos de datos simples
Escribir un programa que pida al usuario dos números enteros y muestre por
pantalla la <n> entre <m> da un cociente <c> y un resto <r>
donde <n> y <m> son los números introducidos por el usuario, y <c> y <r> son
el cociente y el resto de la división entera respectivamente. """
def my_code(n, m): # "n" el dividendo, "m" el divisor
    c = int(n / m) # cociente, resultado de la división
    r = int(n % m) # módulo, residuo, resto de la división
    print(f"{n} entre {m} da un cociente de {c} y un resto de {r}")
    # se divide el dividendo entre el divisor

my_code(9, 3) # dividendo, divisor
my_code(27, 4) # dividendo, divisor
my_code(3902, 19) # dividendo, divisor
my_code(3478, 26) # dividendo, divisor