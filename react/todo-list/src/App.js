import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';

function App() {
const [todo, setTodo] = useState('')
const [todoList, setTodoList] = useState([])

  return (
    <div>
      <Header/>
      <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
      <List todoList={todoList} setTodoList={setTodoList} todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
