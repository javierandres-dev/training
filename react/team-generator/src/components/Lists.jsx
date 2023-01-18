import React from 'react'

export const Lists = () => {
  const arr = ['element1', 'element2', 'element3', 'element4']
  const pp = arr.map((p, i) => <p key={i}>{p}</p>)
  const arrObj = [{id:1, name: 'a'}, {id:2, name: 'b'}, {id:3, name: 'c'}]
  const ul = arrObj.map(obj => <li key={obj.id}>Value: {obj.name}</li>)
  return (
    <div>
      <div>{pp}</div>
      <div>{ul}</div>
    </div>
  )
}
