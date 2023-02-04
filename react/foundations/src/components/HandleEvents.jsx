import React from 'react'

export const HandleEvents = () => {
  const handleChange = (e) =>{
    console.log(e.target.value);
  }
  const handleClick = (e) =>{
    e.preventDefault()
    console.log('clicked!');
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('submission!');
  }
  return (
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value='static value' />
        <button type='button' onClick={handleClick}>Click me</button>
        <button type='submit'>Submit</button>
      </form>
  )
}
