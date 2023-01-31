import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Form = ({todo, setTodo, todoList, setTodoList, rename, setRename, setMessage}) => {
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    if (rename) {
      const arr = todoList.filter(item => item.id === rename)
      setCurrent(arr[0])
    }
  }, [rename])
  
const handleChange = (e) => {
  setTodo({...todo, id: uuidv4(), name: e.target.value})
}

const handleSubmit = (e) => {
  e.preventDefault()
  if (!todo.name) return setMessage('Please, first enter a task name, then press "Add" button to add the task.')
  setTodoList([...todoList, todo])
  setTodo({
    id: null,
    name: '',
    completed: false
  })
}

const handleChangeRename = (e) => {
  setCurrent({...current, name: e.target.value})
}

const handleSubmitRename = (e) => {
  e.preventDefault()
  const arr = [...todoList]
  const i = arr.findIndex(item => item.id === current.id)
  arr[i].name = current.name
  setTodoList(arr)
  setCurrent(null)
  setRename(null)
}

  return (
    <>
    {rename && current ?  <form onSubmit={handleSubmitRename}>
    <input type="text" value={current.name} onChange={handleChangeRename} />
    <button>Update</button>
  </form> : <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter a task...' value={todo.name} onChange={handleChange} />
      <button>Add</button>
    </form>}
  </>
  )
}
