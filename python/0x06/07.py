""" Escribir un programa que solicite al usuario una vocal en minúscula, y
luego una letra en mayúscula. El programa debe convertir la letra en minúscula
y la vocal en mayúscula, y al final, deben ser concatenadas ambas """
vowel = input('Ingrese una vocal en minúscula: ')
consonant = input('Ingrese una consonante en mayúscula: ')
vowel = vowel.upper()
consonant = consonant.lower()
print(vowel + consonant)
