import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export const Ex02 = () => {
  const [users, setUsers] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (users) getItems();
  }, [users]);

  const getUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      setUsers(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  const getItems = () => {
    const arr = users.map((u) => (
      <ListGroup.Item as='li' key={u.id}>
        {u.name}
      </ListGroup.Item>
    ));
    setItems(arr);
  };

  return (
    <div>
      <h2>Users</h2>
      <ListGroup as='ol' numbered className='text-start'>
        {items}
      </ListGroup>
    </div>
  );
};
