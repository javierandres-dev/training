import React from 'react';
import Figure from 'react-bootstrap/Figure';

export const Home = () => {
  return (
    <section className='d-flex flex-column align-items-center'>
      <h1>Welcome!</h1>
      <Figure className='text-center'>
        <Figure.Image
          width={171}
          height={180}
          alt='171x180'
          src='https://xsgames.co/randomusers/assets/avatars/female/0.jpg'
          className='rounded-circle'
        />
        <Figure.Caption>I'm Pepita Pérez</Figure.Caption>
      </Figure>
    </section>
  );
};
