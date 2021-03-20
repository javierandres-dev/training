# Crear un módulo, dentro crear una clase "fichero",
# dentro crear tres funciones: leer fichero, grabar fichero, incluir fichero.
# Crear un programa, dentro crear un objeto de la clase "fichero" del módulo
# Usar los tres métodos: leer, grabar, incluir
# Ejecutar el programa desde la terminal
import module12

fileName = 'file12py'
file = module12.File(fileName)

content = "First line.\nSecond line."
file.saveFile(content)

content = '\nThird line.'
file.appendFile(content)

reading = file.readFile()
print(reading)
