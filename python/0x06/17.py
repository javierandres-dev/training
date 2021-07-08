""" En el siguiente diccionario se encuentran capitales de los paises en el
mundo, debes realizar un programa que pida un pais al usuario, y muestre la
capital de ese pais, en dado caso el pais no este en el diccionario, se debe
mostrar un mensaje diciendo que ese pais no se encuentra.
{"Guatemala": "Ciudad de Guatemala", "El Salvador": "San Salvador", "Honduras":
"Honduras","Nicaragua": "Managua", "Costa Rica": "San Jose", "Panama":
"Panama", "Argentina": "Buenos Aires", "Colombia": "Bogota", "Venezuela":
"Caracas", "España": "Madrid"} """
capitals = {"Guatemala": "Ciudad de Guatemala", "El Salvador": "San Salvador", "Honduras": "Honduras", "Nicaragua": "Managua",
            "Costa Rica": "San Jose", "Panama": "Panama", "Argentina": "Buenos Aires", "Colombia": "Bogota", "Venezuela": "Caracas", "España": "Madrid"}
country = input('Ingrese un país: ')
print('País no encontrado' if capitals.get(
    country) == None else capitals[country])
