# Crea un programa que pida introducir una dirección de email por teclado.
# El programa debe imprimir en consola si la dirección de email es correcta
# o no en función de si esta tiene el símbolo ‘@’.  Si tiene una ‘@’ la
# dirección será correcta.  # Si tiene más de una o ninguna ‘@’ la dirección
# será errónea.  Si la ‘@’ está al comienzo de la dirección de email o al
# final, la dirección también será errónea,
email = input(('Enter a email address: '))
check1 = email.count('@')
check2 = email.startswith('@')
check3 = email.endswith('@')
if (check1 is 1 and check2 is False and check3 is False):
    print('Email address valid.')
else:
    print('Email address invalid.')
