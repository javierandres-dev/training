import React from 'react'

export const Form = ({todo, setTodo, todoList, setTodoList}) => {

const handleChange = (e) => {
  setTodo(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  setTodoList([...todoList, todo])
  setTodo('')
}

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter a task...' value={todo} onChange={handleChange} />
      <button>Add</button>
    </form>
  )
}
