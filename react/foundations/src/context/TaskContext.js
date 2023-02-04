import { createContext } from 'react';

const TaskContext = createContext({
  id: null,
  name: null,
  completed: false,
});
export default TaskContext;
