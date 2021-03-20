""" Escribir una función que dados cuatro números, devuelva el mayor producto
    de dos de ellos. Por ejemplo, si recibe los números 1, 5, -2, -4 debe
    devolver 8, que es el producto más grande que se puede obtener entre ellos.
"""


def largest_product(n1, n2, n3, n4):
    _list = [n1, n2, n3, n4]
    _list.sort()
    largest = _list[0] * _list[1]
    for i in range(1, len(_list)):
        p = _list[i - 1] * _list[i]
        if p > largest:
            largest = p
    return(largest)


if __name__ == "__main__":
    print(largest_product(1, 5, -2, -4))
    print(largest_product(-4, -2, 1, 5))
    print(largest_product(5, -4, 1, -2))
    print(largest_product(-2, 5, -4, 1))
    print(largest_product(-4, 1, 5, -2))
    print(largest_product(-2, 1, 5, -4))
    print(largest_product(-1, 1, 0, 0))
    print(largest_product(0, 0, -1, -1))
