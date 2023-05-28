import { Link, Navigate } from 'react-router-dom';

export const Nav = ({ logged, setLogged }) => {
  let output = null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLogged(false);
    <Navigate to='/' replace={true} />;
  };

  if (logged) {
    output = (
      <div>
        <Link to='/special'>Special</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    output = (
      <div>
        <Link to='/login'>Login</Link>
        <Link to='/sign-up'>Sign Up</Link>
      </div>
    );
  }

  return (
    <>
      <div className='nav'>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>{output}</div>
      </div>
    </>
  );
};
