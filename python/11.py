""" Escribe un programa que pida dos palabras y diga si riman o no.
Si coinciden las tres últimas letras tiene que decir que riman.
Si coinciden sólo las dos últimas tiene que decir que riman un poco y si no,
que no riman. """
word1 = input('Ingrese primer palabra: ')
word2 = input('Ingrese segunda palabra: ')
if word1[-3:] == word2[-3:]:
    print('Riman')
elif word1[-2:] == word2[-2:]:
    print('Riman un poco')
else:
    print('No riman')
