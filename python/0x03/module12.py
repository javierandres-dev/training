# Crear un módulo, dentro crear una clase "fichero",
# dentro crear tres funciones: leer fichero, grabar fichero, incluir fichero.
# Crear un programa, dentro crear un objeto de la clase "fichero" del módulo
# Usar los tres métodos: leer, grabar, incluir
# Ejecutar el programa desde la terminal
class File:
    def __init__(self, filename):
        self.filename = filename

    def saveFile(self, content):
        file = open(self.filename, "w")
        file.write(content)
        file.close()

    def appendFile(self, content):
        file = open(self.filename, "a")
        file.write(content)
        file.close()

    def readFile(self):
        file = open(self.filename, "r")
        content = file.read()
        return content
