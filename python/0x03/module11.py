# Crear un módulo con clase "coche" y función lambda anteriores -> modulo1.py
# Crear un programa -> programa1.py, importar modulo1.py
# En programa crear un objeto "coche1"
# Ejecutar programa: mostrar características de coche, calcular promedio.
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
        return res


def average(a, b, c): return (a + b + c) / 3
