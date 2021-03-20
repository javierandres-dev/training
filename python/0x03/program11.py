# Crear un módulo con clase "coche" y función lambda anteriores -> modulo1.py
# Crear un programa -> programa1.py, importar modulo1.py
# En programa crear un objeto "coche1"
# Ejecutar programa: mostrar características de coche, calcular promedio.
import module11

car1 = module11.Car('Renault', 'Blue', 'Petrol fuel', 2.0)
print(car1.showFeature())
print('--------')
average = module11.average(3, 8, 7)
print('average is {}'.format(average))
