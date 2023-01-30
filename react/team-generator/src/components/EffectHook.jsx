import React, { useState, useEffect } from 'react';

export const EffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('EffectHook: Updating phase');
    console.log(`EffectHook: You clicked ${count} times`)
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}