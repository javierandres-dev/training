aSet = {'one', 'two', 'three', 'four'}
oSet = {'one', 'two', 'three', 'four', 'five', 'six'}
a = {"a", "b", "c"}
b = {"f", "e", "d", "c", "b", "a"}
c = {"f", "e", "d", "c", "b", "a"}
d = {"a", "b", "c"}
e = {'any1', 'any2', 'any3'}
f = {'any1', 'any2', 'any3', 'any4'}
aSet.add('zero')
res = aSet.copy()
res = aSet.difference(oSet)
res = a.difference_update(b)
oSet.discard('six')
res = aSet.intersection(oSet)
res = a.intersection_update(b)
res = aSet.isdisjoint(oSet)
res = a.issubset(b)
res = c.issuperset(d)
e.pop()
f.remove('any2')
res = aSet.symmetric_difference(oSet)
res = e.symmetric_difference_update(f)
res = aSet.union(oSet)
a.update(b)
print(aSet)
print(oSet)
print(res)
print(e)
print(f)
