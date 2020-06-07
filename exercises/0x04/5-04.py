"""Escribir un programa que pregunte una fecha en
formato dd/mm/aaaa y muestre por pantalla la misma fecha
en formato dd de <mes> de aaaa donde <mes> es el nombre del mes."""


def my_sol():
    months = {'01': 'Enero', '02': 'Febrero', '03': 'Marzo',
              '04': 'Abril', '05': 'Mayo', '06': 'Junio',
              '07': 'Julio', '08': 'Agosto', '09': 'Septiembre',
              '10': 'Octubre', '11': 'Noviembre', '12': 'Diciembre'}
    date = input('Ingrese una fecha en formato dd/mm/aaaa: ')
    date = date.split('/')
    day = date[0]
    month = date[1]
    year = date[2]
    print('Fecha: {} de {} de {}'.format(day, months.get(month), year))


my_sol()
