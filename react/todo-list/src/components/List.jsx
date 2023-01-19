import React from 'react'

export const List = ({todo, setTodo, todoList, setTodoList}) => {

  const handleClick = (i) => {
    const arr = [...todoList]
    arr.splice(i, 1)
    setTodoList(arr)
  }

  const items = todoList.map((item, i) => <li key={i}>{item}<span className='done' onClick={() => handleClick(i)}>Done</span></li>)
  return (
    <ol>{items}</ol>
  )
}
