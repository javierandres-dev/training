import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PageLogin = ({ setLogged }) => {
  const [back, setBack] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    username: null,
    password: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const backend = JSON.parse(localStorage.getItem('back'));
    if (backend) {
      setBack(backend);
    }
  }, []);

  const handleInput = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentUser.username || !currentUser.password) {
      alert('All fields are requerid.');
      return;
    }
    const isValid =
      currentUser.username === back.username &&
      currentUser.password === back.password;

    if (isValid) {
      localStorage.setItem('token', JSON.stringify({ name: back.name }));
      setLogged(true);
      navigate('/special');
    } else {
      alert('Oops!  Please try again, type username and password valid');
    }
  };

  const output = back ? (
    <form onSubmit={handleSubmit}>
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
      <button type='submit'>Login</button>
    </form>
  ) : (
    <div>There aren't users registered.</div>
  );
  return <>{output}</>;
};
