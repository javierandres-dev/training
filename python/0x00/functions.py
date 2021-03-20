def fn():
    print('Function without parameter/arguments.')


fn()


def fn1(argv):
    print(f'Function with one parameter/argument: {argv}.')


fn1('Hello, World!')


def fn2(argv1, argv2):
    print(f'Function with parameters/arguments: {argv1}, {argv2}!.')


fn2('Hello', 'World')
