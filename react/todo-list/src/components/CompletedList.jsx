import React from 'react'

export const CompletedList = ({completed, setRename, handleChange, handleClick}) => {
  const items = completed.map(item => <li key={item.id}>{item.name} <button onClick={()=>setRename(item.id)}>Rename</button><label>Completed<input type="checkbox" checked={item.completed} onChange={()=>handleChange(item.id)}/></label><button onClick={()=>handleClick(item.id)}>Remove</button></li>)

  let output = null;

  items.length ? output = <ol>{items}</ol> : output = <p>Whitout completed todos</p>

  return (
    <>
      <h3>Completed</h3>
      {output}
    </>
  )
}
