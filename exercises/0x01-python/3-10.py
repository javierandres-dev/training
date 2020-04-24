""" Ejercicios de bucles
Escribir un programa que pida al usuario un número entero y muestre por
pantalla si es un número primo o no. """
def my_code():
    n = int(input("Ingrese un número entero: "))
    r = ""
    if n < 2:
        r = "no es un número primo"
    elif n == 2:
        r = "es un número primo"
    elif n % 2 == 0:
        r = "no es un número primo"
    else:
        i = 2
        while i < n:
            if n % i == 0:
                r = "no es un número primo"
            if r == "":
                if n % 1 == 0 and n % n == 0:
                    r = "es un número primo"
            i += 1
    print(f"{n} {r}")

my_code()