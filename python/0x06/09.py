""" Crear un programa que pida al usuario una letra, y si es vocal, muestre el
mensaje "Es vocal". Sino, decirle al usuario que no es vocal """
vowels = 'aeiou'
vowel = input()
print('Es vocal' if vowel in vowels else 'No es vocal')
