import React, { useEffect, useRef, useState } from 'react';

export const RefHook = () => {
  const [counter, setCounter] = useState(0);
  const name = useRef('javier');

  const renderCount = useRef(0);
  const btnRef = useRef();

  useEffect(() => {
    console.log('btnRef:', btnRef.current);
    if (renderCount.current === 0) {
      renderCount.current = renderCount.current + 1;
      return;
    }
    console.log(`RefHook: Counter is ${counter}`);
  }, [counter]);

  console.log(name);
  console.log(typeof name);

  const changeName = () => {
    name.current = 'Andrés';
    btnRef.current.textContent = 'Name changed!';
    console.log(`RefHook: Now name is ${name.current}`);
  };
  return (
    <>
      <div>RefHook</div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment counter</button>
      <br />
      <p>Name: {name.current}</p>
      <button ref={btnRef} onClick={changeName}>
        Change name
      </button>
    </>
  );
};
