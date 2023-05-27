import { useState, useEffect } from 'react';
import { SignUp } from './SignUp';
import { Login } from './Login';
import { Greet } from './Greet';

export const Main = ({ mainView, setLogged }) => {
  const [view, setView] = useState(null);

  useEffect(() => {
    if (mainView === 'signUp') {
      setView(<SignUp setLogged={setLogged} />);
    } else if (mainView === 'login') {
      setView(<Login setLogged={setLogged} />);
    } else if (mainView === 'greet') {
      setView(<Greet />);
    } else {
      setView(null);
    }
  }, [mainView]);

  return <div className='main'>{view ? view : <div>main content</div>}</div>;
};
