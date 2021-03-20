""" Python Built in Functions """

resp = abs(-8.42)
# Returns the absolute value of a number
print(f"abs(-8.42)\t= {resp}")

resp = all([True, True])
# Returns True if all items in an iterable object are true
print(f"all([True, True])\t= {resp}")
resp = all([True, False])
print(f"all([True, False])\t= {resp}")

resp = any([False, False, True, False])
# Returns True if any item in an iterable object is true
print(f"any([False, False, True, False])\t= {resp}")
resp = any([False, False, False, False])
print(f"any([False, False, False, False])\t= {resp}")

resp = ascii("My name is Ståle")
# Replaces none-ascii characters with escape character
print(f"ascii('My name is Ståle')\t= {resp}")
resp = ascii("Ö")
print(f"ascii('Ö')\t= {resp}")

resp = bin(0)
# Returns the binary version of a number
print(f"bin(0)\t= {resp}")
resp = bin(1)
print(f"bin(1)\t= {resp}")
resp = bin(8)
print(f"bin(8)\t= {resp}")

resp = bool(1)
# Returns the boolean value of the specified object
print(f"bool(1)\t= {resp}")
resp = bool(0)
print(f"bool(0)\t= {resp}")
resp = bool([])
print(f"bool([])\t= {resp}")

resp = bytearray(0)
# Returns an array of bytes
print(f"bytearray(0)\t= {resp}")
resp = bytearray(1)
print(f"bytearray(1)\t= {resp}")
resp = bytearray(8)
print(f"bytearray(8)\t= {resp}")

resp = bytes(0)
# Returns a bytes object
print(f"bytes(0)\t= {resp}")
resp = bytes(1)
print(f"bytes(1)\t= {resp}")
resp = bytes(8)
print(f"bytes(8)\t= {resp}")

def fn():
    return 2 * 4
resp = callable(fn)
# Returns True if the specified object is callable
print(f"callable(fn)\t= {resp}")
resp = callable(0)
print(f"callable(0)\t= {resp}")
resp = callable(1)
print(f"callable(1)\t= {resp}")

resp = chr(69)
# Returns a character from the specified Unicode code.
print(f"chr(69)\t= {resp}")

resp = complex(0, 1)
# Returns a complex number
print(f"complex(0, 1)\t= {resp}")
resp = complex(2, 4)
print(f"complex(2, 4)\t= {resp}")

class Post:
    title = 'Hello, world!'
    likes = 10
p1 = Post()
print(f"p1.likes\t= {p1.likes}")
resp = delattr(Post, 'likes')
# Deletes the specified attribute (property, method) from the specified object
print(f"delattr(Post, 'likes')\t= {resp}")
p1 = Post()
#print(f"p1.likes\t= {p1.likes}")

resp = dict(name='Javi', age='44')
# Returns a dictionary
print(f"dict(name='Javi', age='44')\t= {resp}")

obj = dict(title='Hello, World!', likes=10)
resp = dir(obj)
# Returns a list of the specified object
print(f"dir(obj)\t= {resp}")

resp = divmod(8, 2)
# Return the quotient and the remainder of 'n1' divided by 'n2'
print(f"divmod(8, 2)\t= {resp}")

weekend = ["Saturday", "Sunday"]
resp = list(enumerate(weekend))
# Returns it as an enumerate object
print(f"list(enumerate(weekend)\t= {resp}")
for i in resp:
    print(i)

eval("print(0)")
eval("print(1)")
eval("print(weekend)")
# Evaluates and executes an expression

code = "title = 'Hello, World!'\nprint(title)"
exec(code)
# Executes the specified code (or object)

resp = float(0)
# Returns a floating point number
print(f"float(0)\t= {resp}")
resp = float(1)
print(f"float(1)\t= {resp}")
resp = float(10)
print(f"float(10)\t= {resp}")

resp = format(0.19, '%')
# Formats a specified value
print(f"format(0.19, '%')\t= {resp}")

workweek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
resp = frozenset(workweek)
# Returns a frozenset object
print(f"frozenset(workweek)\t= {resp}")

resp = globals()
# Returns the current global symbol table as a dictionary
print(f"globals()\t= {resp}")

resp = classmethod(Post)
# Converts a method into a class method
print(f"classmethod(Post)\t= {resp}")
resp = classmethod(fn)
print(f"classmethod(fn)\t= {resp}")

resp = compile('print("Hello, World!")', 'test', 'eval')
# Returns the specified source as an object, ready to be executed
exec(resp)

ages = [5, 12, 17, 18, 24, 32]
def func(x):
  if x < 18:
    return False
  else:
    return True
resp = filter(func, ages)
# Use a filter function to exclude items in an iterable object
print(f"filter(function, iterable)\t= {resp}")
for i in resp:
    print(i)

resp = getattr(Post, "title")
# Returns the value of the specified attribute
print(f"getattr(Post, title)\t= {resp}")
