# Inline comment
"""
Block comment
"""
print("Hello, World!")
print("Hello\nWorld!")
print("\tHello\n\tWorld!")
print("\\tHello\\n\\tWorld!")
my_str, my_num, my_bool, my_float = "Hi", 1, True, 0.5
print("Formatting... %s %d %s %f" % (my_str, my_num, my_bool, my_float))
print("Formatting... {} {} {} {}".format(my_str, my_num, my_bool, my_float))
print(f"Formatting... {my_str} {my_num} {my_bool} {my_float}")
a_name = input("Enter a name: ")
print(a_name)
