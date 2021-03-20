# if
a = 0
if a == 0:
    print('testing first if')
# if ... else
a = 1
if a == 0:
    print('testing second if')
else:
    print('testing first else')
# if ... elif ...else
a = 2
if a == 0:
    print('testing thirty if')
elif a == 1:
    print('testing first elif')
else:
    print('testing second else')
# for in
aList = [1, 2, 3, 4, 5, 6, 7, 8]
for i in aList:
    print(i)
aString = 'Hello, World!'
for i in aString:
    print(i, end='')
for i in range(4):
    print(f'testing for in {i}')
for i in range(4):
    print('Hello')
# while
i = 0
while i < 10:
    print(f'testing while {i}')
    i += 1
# while else
while i == 10:
    print(f'testing second while else {i}')
    i += 1
else:
    print(f'testing while else {i}')
