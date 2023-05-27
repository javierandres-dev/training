export const Nav = ({ logged, setLogged, setMainView }) => {
  let output = null;

  const handleSignUp = () => {
    setMainView('signUp');
  };

  const handleLogin = () => {
    setMainView('login');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLogged(false);
  };

  if (logged) {
    output = (
      <div>
        <a href='#'>VIP</a>
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  } else {
    output = (
      <div>
        <button onClick={handleLogin}>login</button>
        <button onClick={handleSignUp}>sign up</button>
      </div>
    );
  }

  return (
    <>
      <div className='nav'>
        <div>
          <a href='#'>home</a>
          <a href='#'>products</a>
          <a href='#'>services</a>
          <a href='#'>about</a>
          <a href='#'>contact</a>
        </div>
        <div>{output}</div>
      </div>
    </>
  );
};
