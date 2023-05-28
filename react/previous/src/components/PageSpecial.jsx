import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PageSpecial = ({ setLogged }) => {
  const [name, setName] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      setLogged(true);
      setName(token.name);
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <div>Page Special</div>
      <div>Hello, {name}! </div>
    </>
  );
};
