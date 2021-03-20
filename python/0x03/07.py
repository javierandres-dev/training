# Un diccionario: manzana-apple, naranja-orange, platano-banana, limon-lemon
# Mostrar la traducción para la palabra "naranja"
# Añadir piña-pineapple
# Mostrar todos los elementos
fruits = {'manzana': 'apple', 'naranja': 'orange',
          'platano': 'banana', 'limon': 'lemon'}
english = fruits['naranja']
print('naranja is {}'.format(english))
fruits['piña'] = 'pineapple'
for key, value in fruits.items():
    print('{}: {}'.format(key, value))
