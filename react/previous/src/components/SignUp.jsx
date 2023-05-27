import { useState } from 'react';

export const SignUp = ({ setLogged }) => {
  const [user, setUser] = useState({
    name: null,
    username: null,
    password: null,
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.username || !user.password) {
      alert('All fields are requerid.');
      return;
    }
    localStorage.setItem('back', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify({ name: user.name }));
    setLogged(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onInput={handleInput}
          name='name'
          type='text'
          placeholder='Type your name'
        />
        <input
          onInput={handleInput}
          name='username'
          type='text'
          placeholder='username'
        />
        <input
          onInput={handleInput}
          name='password'
          type='password'
          placeholder='password'
        />
        <button type='submit'>Sign Up</button>
      </form>
    </>
  );
};
