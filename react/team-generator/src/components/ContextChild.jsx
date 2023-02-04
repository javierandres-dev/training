import React from 'react';
import useTaskContext from '../hooks/useTaskContext';

export const ContextChild = () => {
  const task = useTaskContext();
  console.log(task);
  return (
    <>
      <div>ContextChild</div>
      <p>Task name: {task.name}</p>
    </>
  );
};
