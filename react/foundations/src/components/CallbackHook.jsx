import React, { useState, useCallback } from 'react';
import { CallbackHookChild } from './CallbackHookChild';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');

  //const getDouble = () => counter * 2;
  const getDouble = useCallback(() => counter * 2, [counter]);

  return (
    <>
      <div>CallbackHook</div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <CallbackHookChild getDouble={getDouble} />
      <p>Message: {message}</p>
      <input type='text' onInput={(e) => setMessage(e.target.value)} />
    </>
  );
};
