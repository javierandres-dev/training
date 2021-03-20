""" Ejercicios de condicionales
En una determinada empresa, sus empleados son evaluados al final de cada
año. Los puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden
ir aumentando, traduciéndose en mejores beneficios. Los puntos que pueden
conseguir los empleados pueden ser 0.0, 0.4, 0.6 o más, pero no valores
intermedios entre las cifras mencionadas. A continuación se muestra una tabla
con los niveles correspondientes a cada puntuación. La cantidad de dinero
conseguida en cada nivel es de 2.400€ multiplicada por la puntuación del nivel.
    Nivel       Puntuación
Inaceptable 	0.0
Aceptable       0.4
Meritorio       0.6 o más
Escribir un programa que lea la puntuación del usuario e indique su nivel de
rendimiento, así como la cantidad de dinero que recibirá el usuario. """
def my_code():
    bonus = 2400
    unacceptable = 0.0
    acceptable = 0.4
    worthy = 0.6
    score = float(input("Puntuación (ej: 0.0, 0.4, 0.6, 0.n): "))
    if score == unacceptable:
        level = "Inaceptable"
        pay = bonus * unacceptable
        print(f"Nivel de rendimiento:\t{level}\nDinero que recibirá:\t{pay}€")
    elif score == acceptable:
        level = "Aceptable"
        pay = bonus * acceptable
        print(f"Nivel de rendimiento:\t{level}\nDinero que recibirá:\t{pay}€")
    elif score >= worthy:
        level = "Meritorio"
        pay = bonus * worthy
        print(f"Nivel de rendimiento:\t{level}\nDinero que recibirá:\t{pay}€")
    else:
        print("Error: Puntuación no aceptada")

my_code()