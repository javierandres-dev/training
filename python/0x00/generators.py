# Example generator, generate even numbers
# fn, without generator
def fn(limit):
    num = 1
    aList = []
    while num < limit:
        aList.append(num * 2)
        num += 1
    return aList


print(fn(10))


# fn1, with generator
def fn1(limit):
    num = 1
    while num < limit:
        yield num * 2
        num += 1


res = fn1(10)
"""
for i in res:
    print(i, end=', ')
"""
print(next(res))
print('... more code...')
print(next(res))
print('... more code...')
print(next(res))
print('... more code...')
print(next(res))


# yield from - Nested
def fn2(*names):
    for name in names:
        yield from name


res = fn2('Javier', 'Andrés')
print(next(res))
print(next(res))
print(next(res))
print(next(res))
