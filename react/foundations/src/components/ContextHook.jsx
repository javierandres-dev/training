import React from 'react';
import TaskContext from '../context/TaskContext';
import { ContextParent } from './ContextParent';

export const ContextHook = () => {
  const task = {
    id: '0x00',
    name: 'Practice, practice and more practice.',
    completed: false,
  };
  return (
    <TaskContext.Provider value={task}>
      <div>ContextHook</div>
      <ContextParent />
    </TaskContext.Provider>
  );
};
