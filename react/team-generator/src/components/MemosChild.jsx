import React from 'react'

function MemosChild({childCount, setChildCount}) {
  console.log('MemosChild component rendered')
  return (
    <>
    <div>MemosChild</div>
    <p>Child count: {childCount}</p>
    <button onClick={()=>setChildCount(childCount + 1)}>Increment child count</button>
    </>
  )
}

export default React.memo(MemosChild)