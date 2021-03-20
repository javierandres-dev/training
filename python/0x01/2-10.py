""" Ejercicios de condicionales
La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus
clientes. Los ingredientes para cada tipo de pizza aparecen a continuación.
    Ingredientes vegetarianos: Pimiento y tofu.
    Ingredientes no vegetarianos: Peperoni, Jamón y Salmón.
Escribir un programa que pregunte al usuario si quiere una pizza vegetariana
o no, y en función de su respuesta le muestre un menú con los ingredientes
disponibles para que elija. Solo se puede eligir un ingrediente además de la
mozzarella y el tomate que están en todas la pizzas. Al final se debe mostrar
por pantalla si la pizza elegida es vegetariana o no y todos los ingredientes
que lleva. """
import sys
def my_code():
    pizza = ""
    base = "Ingredientes:\t\tMozarella, tomate"
    ingredient = ""
    print("Presione 1 para pizza 'vegetariana' o 2 para 'no vegetariana'")
    option = int(input())
    if option == 1:
        pizza = "vegetariana"
        print("Presione 1 para elegir 'pimiento' o 2 para 'tofu'")
        option = int(input())
        if option == 1:
            ingredient = "pimiento"
        elif option == 2:
            ingredient = "tofu"
        else:
            print("Error: Opción no válida")
            sys.exit()
    elif option == 2:
        pizza = "no vegetariana"
        print("Presione 1 para elegir 'peperoni', 2 para 'jamón' o 3 para 'salmón'")
        option = int(input())
        if option == 1:
            ingredient = "peperoni"
        elif option == 2:
            ingredient = "jamón"
        elif option == 3:
            ingredient = "salmón"
        else:
            print("Error: Opción no válida")
            sys.exit()
    else:
        print("Error: Opción no válida")
        sys.exit()
    print(f"Eligió una pizza:\t{pizza}\n{base} ,{ingredient}")

my_code()