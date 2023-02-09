import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Ex01 } from './Ex01';
import { Ex02 } from './Ex02';
import { Ex03 } from './Ex03';

export const Exercises = () => {
  const [exercise, setExercise] = useState(null);
  return (
    <section>
      <h1 className='text-center'>Exercises</h1>
      {!exercise ? (
        <ol>
          <li onClick={() => setExercise(<Ex01 />)}>One</li>
          <li onClick={() => setExercise(<Ex02 />)}>Two</li>
          <li onClick={() => setExercise(<Ex03 />)}>Three</li>
        </ol>
      ) : (
        <>
          <div className='container my-5 text-center'>{exercise}</div>
          <Button variant='link' onClick={() => setExercise(null)}>
            Back
          </Button>
        </>
      )}
    </section>
  );
};
