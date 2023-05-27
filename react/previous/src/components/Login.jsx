import { useEffect, useState } from 'react';

export const Login = ({ setLogged }) => {
  const [back, setBack] = useState(null);
  const [user, setUser] = useState({
    username: null,
    password: null,
  });

  useEffect(() => {
    const backend = JSON.parse(localStorage.getItem('back'));
    if (backend) {
      setBack(backend);
    }
  }, []);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.username || !user.password) {
      alert('All fields are requerid.');
      return;
    }
    const isValid =
      user.username === back.username && user.password === back.password;

    if (isValid) {
      localStorage.setItem('token', JSON.stringify({ name: back.name }));
      setLogged(true);
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
