# Escribir un programa que reciba una cadena de caracteres y devuelva un
# diccionario con cada palabra que contiene y su frecuencia.
# Escribir otra función que reciba el diccionario generado con la función
# anterior y devuelva una tupla con la palabra más repetida y su frecuencia.
aStr = input('Enter a a paragraph: ')


def fn1(argv):
    aDic = {}
    allWords = argv.split(' ')
    uniqueWords = set(allWords)
    for word in uniqueWords:
        count = allWords.count(word)
        aDic.update({word: count})
    fn2(aDic)


def fn2(argv):
    moreRepeat = max(list(argv.values()))
    for key, value in argv.items():
        if value == moreRepeat:
            k = key
            v = value
    aTuple = (k, v)
    print(aTuple)


textTest = 'Como quieres que te quiera si el que quiero que me quiera no me quiere como quiero que me quiera'
fn1(textTest)
fn1(aStr)
