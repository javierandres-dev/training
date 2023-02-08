import React, { useEffect, useState } from 'react';
import axios from 'axios';

const pictures = [
  'https://xsgames.co/randomusers/avatar.php?g=male',
  'https://xsgames.co/randomusers/avatar.php?g=female',
  'https://xsgames.co/randomusers/avatar.php?g=female',
  'https://xsgames.co/randomusers/avatar.php?g=male',
  'https://xsgames.co/randomusers/avatar.php?g=female',
  'https://xsgames.co/randomusers/avatar.php?g=male',
  'https://xsgames.co/randomusers/avatar.php?g=male',
  'https://xsgames.co/randomusers/avatar.php?g=female',
  'https://xsgames.co/randomusers/avatar.php?g=female',
];

const url = 'https://jsonplaceholder.typicode.com/users';

export const ApiCalls = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log('users:', users);
  }, [users]);

  const getUsersFetch = () => {
    console.log('getUsersFetch...');
    fetch(url)
      .then((res) => res.json())
      .then((users) => console.log('users:', users));
  };

  const getUsersFetchAsyncFn = async () => {
    console.log('getUsersFetchAsyncFn...');
    const res = await fetch(url);
    const users = await res.json();
    console.log('users:', users);
  };

  const getUsersAxios = async () => {
    console.log('getUsersAxios...');
    const res = await axios.get(url);
    console.log('res:', res);
    console.log('users:', res.data);
  };

  const getUsers = async () => {
    const res = await fetch(url);
    const users = await res.json();
    let arr = [];
    for (const i of users) {
      let obj = null;
      const idx = i.id - 1;
      console.log(idx);
      if (idx === 6 || idx === 7) {
        obj = {
          ...i,
          pic: `https://xsgames.co/randomusers/assets/avatars/male/${idx}.jpg`,
        };
      } else {
        obj = {
          ...i,
          pic: `https://xsgames.co/randomusers/assets/avatars/female/${idx}.jpg`,
        };
      }
      arr.push(obj);
    }
    setUsers(arr);
  };

  const Users = ({ users }) => {
    console.log(users);
    const list = users.map((u) => (
      <figure key={u.id}>
        <img src={u.pic} alt={u.name} />
        <figcaption>{u.name}</figcaption>
      </figure>
    ));
    return <div>{list}</div>;
  };

  return (
    <>
      <div>ApiCalls</div>
      <button onClick={getUsersFetch}>Get Users - Fetch</button>
      <button onClick={getUsersFetchAsyncFn}>Get Users - Fetch, AsyncFn</button>
      <button onClick={getUsersAxios}>Get Users - Axios</button>
      <hr />
      {users && users.length > 0 && <Users users={users} />}
    </>
  );
};
