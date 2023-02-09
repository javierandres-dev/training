import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const Ex01 = () => {
  const [counter, setCounter] = useState(null);
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    setCounter(0);
  }, []);

  useEffect(() => {
    if (counter > 0) setBgColor('success');
    else if (counter < 0) setBgColor('warning');
    else setBgColor('secondary');
  }, [counter]);

  return (
    <div>
      <h2>
        Counter <Badge bg={bgColor}>{counter}</Badge>
      </h2>
      <Button
        className='mx-2 my-2'
        variant='outline-secondary'
        onClick={() => setCounter(counter + 1)}
      >
        Increase <i className='bi bi-plus-circle-fill'></i>
      </Button>
      <Button
        className='mx-2 my-2'
        variant='outline-secondary'
        onClick={() => setCounter(counter - 1)}
      >
        Decrease <i className='bi bi-dash-circle-fill'></i>
      </Button>
    </div>
  );
};
