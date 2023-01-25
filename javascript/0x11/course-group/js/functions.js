import list from '../json/data.json' assert { type: "json" };

const getList = () => list

export function getUnorderedList() {
  const unordered = []
  while (unordered.length !== list.length) {
    const i = Math.floor(Math.random() * list.length)
    if (!unordered.includes(list[i])) unordered.push(list[i])
  }
  return unordered
}

export default getList;