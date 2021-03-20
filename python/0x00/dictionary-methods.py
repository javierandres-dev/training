aDictionary = {"brand": "Seat", "model": "León",
               'aKey': 'aValue', "year": 2011}
# aDictionary.clear()
res = aDictionary.copy()
aTuple = ('key1', 'key2', 'key3')
aVariable = 0
res = dict.fromkeys(aTuple, aVariable)
res = aDictionary.get('model')
res = aDictionary.items()
res = aDictionary.keys()
aDictionary.pop('aKey')
aDictionary.popitem()
aDictionary.setdefault('year', 2011)
aDictionary.update({"color": "Red"})
aDictionary.values()
print(aDictionary)
print(res)
