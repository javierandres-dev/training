# Una variable que contine el texto "Esto es un texto de ejemplo"
# Otra variable que contenga la longitud de la anterior cadena
# Otra variable que contenga el texto de la primera en mayúsculas
# Otra variable que concatene como resultado
text = "Esto es un texto de ejemplo"
size = len(text)
upper = text.upper()
res = 'Original text: ' + text + '\nLength: ' + \
    str(size) + '\nText in upper case: ' + upper
print(res)
