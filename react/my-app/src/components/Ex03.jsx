import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';

export const Ex03 = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
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
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      setUsers(await res.json());
    } catch (error) {
      setAlert(true);
    } finally {
      setLoading(false);
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
      {alert ? (
        <Alert variant='warning'>An error occurred, try again later</Alert>
      ) : loading ? (
        <Spinner animation='border' variant='primary' />
      ) : (
        items && (
          <ListGroup as='ol' numbered className='text-start'>
            {items}
          </ListGroup>
        )
      )}
    </div>
  );
};
