""" Ejercicios de condicionales
Los tramos impositivos para la declaración de la renta
en un determinado país son los siguientes:
        Renta       Tipo impositivo
Menos de 10000€         5%
Entre 10000€ y 20000€   15%
Entre 200000€ y 35000€  20%
Entre 350000€ y 60000€  30%
Más de 60000€           45%
Escribir un programa que pregunte al usuario su renta anual
y muestre por pantalla el tipo impositivo que le corresponde. """
def my_code():
    annual_rent = int(input("Renta anual: €"))
    if annual_rent < 10000:
        tax_rate = "5%"
    elif annual_rent <= 20000:
        tax_rate = "15%"
    elif annual_rent <= 35000:
        tax_rate = "20%"
    elif annual_rent <= 60000:
        tax_rate = "30%"
    else:
        tax_rate = "45%"
    print(f"Le corresponde {tax_rate} de tipo impositivo")

my_code()