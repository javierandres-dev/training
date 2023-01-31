import React from 'react'

export const PendingList = ({pending, setRename, handleChange, handleClick}) => {
  const items = pending.map(item => <li key={item.id}>{item.name} <button onClick={()=>setRename(item.id)}>Rename</button><label>Completed<input type="checkbox" checked={item.completed} onChange={()=>handleChange(item.id)}/></label><button onClick={()=>handleClick(item.id)}>Remove</button></li>)

  let output = null;

  items.length ? output = <ol>{items}</ol> : output = <p>Whitout pending todos</p>

  return (
    <>
      <h3>Pending</h3>
      {output}
    </>
  )
}
