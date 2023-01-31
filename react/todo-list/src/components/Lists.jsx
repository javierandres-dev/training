import React, { useEffect, useState } from 'react'
import { CompletedList } from './CompletedList'
import { PendingList } from './PendingList'

export const Lists = ({todoList, setTodoList, setRename}) => {
  const [pending, setPending] = useState([])
  const [completed, setCompleted] = useState([])

  useEffect(() => {
    const p = [], c = [];
    for (const i of todoList) {
      if (i.completed) c.push(i)
      else p.push(i)
    }
    setPending(p)
    setCompleted(c)
    if (todoList.length > 0) localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])
  
  const handleChange = (id) => {
    const arr = [...todoList]
    const i = arr.findIndex(item => item.id === id)
    arr[i].completed = !arr[i].completed
    setTodoList(arr)
  }
  
  const handleClick = (id) => {
    const arr = todoList.filter(item => item.id !== id)
    setTodoList(arr)
    if (arr.length === 0) localStorage.removeItem('todoList')
  }

  return (
    <>
      <PendingList pending={pending} setRename={setRename} handleChange={handleChange} handleClick={handleClick}/>
      <CompletedList completed={completed} setRename={setRename} handleChange={handleChange} handleClick={handleClick}/>
    </>
  )
}
