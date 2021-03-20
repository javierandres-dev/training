# Una clase "coche": marca, color, combustible, cilindrada
# Método: "mostrar características"
# Objeto "coche1":  Opel, rojo, gasolina, 1.6
# Ejecutar método
class Car:
    def __init__(self, brand, color, combustible, cylinder):
        self.brand = brand
        self.color = color
        self.combustible = combustible
        self.cylinder = cylinder

    def showFeature(self):
        res = ('Features:\nBrand: {}\nColor: {}\nCombustible: {}\nCylinder: {}'
               .format(
                   self.brand, self.color, self.combustible, self.cylinder))
        print(res)


car1 = Car('Opel', 'rojo', 'gasolina', 1.6)
# print(car1.brand)
# print(car1.color)
# print(car1.combustible)
# print(car1.cylinder)
car1.showFeature()
