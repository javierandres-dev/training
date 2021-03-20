# Dado un diccionario: manzana-apple, naranja-orange, platano-banana,
# limon-lemon.  Grabarlo en un archivo binario.
# Luego recuperar esta estructura, verificar que sigue siendo un diccionario.
import pickle  # Work with binary files
fruits = {"manzana": "apple", "naranja": "orange",
          "platano": "banana", "limon": "lemon"}
print(fruits.values())  # Check before
print(type(fruits))  # Check before
print("--------")
writeBinaryFile = open("file13py", "wb")
pickle.dump(fruits, writeBinaryFile)  # Create binary file
writeBinaryFile.close()
readBinaryFile = open("file13py", "rb")
data = pickle.load(readBinaryFile)  # Recovery binary file
print(data)
print(data.values())  # Check after
print(type(data))  # Check after
