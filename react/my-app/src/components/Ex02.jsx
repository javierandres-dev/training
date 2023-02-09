import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

export const Ex02 = () => {
  const [duck, setDuck] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const getDuck = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://random-d.uk/api/v2/random');
      setDuck(await res.json());
    } catch (error) {
      setAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Duck</h2>
      {alert ? (
        <Alert variant='warning'>An error occurred, try again later</Alert>
      ) : loading ? (
        <Spinner animation='border' variant='primary' />
      ) : (
        duck && <Image thumbnail src={duck.url} alt='duck' className='mt-2' />
      )}
      <Button
        variant='primary'
        onClick={() => getDuck()}
        className='d-block mx-auto mt-4'
      >
        Get duck
      </Button>
    </div>
  );
};
