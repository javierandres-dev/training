import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Lists } from './components/Lists';

function App() {
  const [todo, setTodo] = useState({
    id: null,
    name: '',
    completed: false,
  });
  const [todoList, setTodoList] = useState([]);
  const [rename, setRename] = useState(null);
  const [message, setMessage] = useState('Press "Add" button to add a task.');

  useEffect(() => {
    if (localStorage.getItem('todoList')) {
      setTodoList(JSON.parse(localStorage.getItem('todoList')));
    }
  }, []);

  console.log(process.env.REACT_APP_TOP_SECRET);

  return (
    <div>
      <Header />
      <p>{message}</p>
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
        rename={rename}
        setRename={setRename}
        setMessage={setMessage}
      />
      <Lists
        todoList={todoList}
        setTodoList={setTodoList}
        setRename={setRename}
      />
    </div>
  );
}

export default App;
