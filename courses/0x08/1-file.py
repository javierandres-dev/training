from tkinter import * # Para entorno gráfico
from tkinter import messagebox # Para mensajes emergentes especificamente
import sqlite3 # Para poder conectar a la base de datos
root=Tk()

barraMenu=Menu(root)
root.config(menu=barraMenu, width=320, height=320)

bbddMenu=Menu(barraMenu, tearoff=0)
bbddMenu.add_command(Label="Conectar")
bbddMenu.add_command(Label="Salir")

borrarMenu=Menu(barraMenu, tearoff=0)
borrarMenu.add_command(Label="Borrar campos")

crudMenu=Menu(barraMenu, tearoff=0)
crudMenu.add_command(Label="Crear")
crudMenu.add_command(Label="Leer")
crudMenu.add_command(Label="Actualizar")
crudMenu.add_command(Label="Borrar")

ayudaMenu=Menu(barraMenu, tearoff=0)
ayudaMenu.add_command(Label="Licencia")
ayudaMenu.add_command(Label="Acerca de")

barraMenu.add_cascade(Label="BBDD", menu=bbddMenu)
barraMenu.add_cascade(Label="Borrar", menu=borrarMenu)
barraMenu.add_cascade(Label="CRUD", menu=crudMenu)
barraMenu.add_cascade(Label="Ayuda", menu=ayudaMenu)

root.mainloop()