import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PageSignUp = ({ setLogged }) => {
  const [newUser, setNewUser] = useState({
    name: null,
    username: null,
    password: null,
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.username || !newUser.password) {
      alert('All fields are requerid.');
      return;
    }
    localStorage.setItem('back', JSON.stringify(newUser));
    localStorage.setItem('token', JSON.stringify({ name: newUser.name }));
    setLogged(true);
    navigate('/special');
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
