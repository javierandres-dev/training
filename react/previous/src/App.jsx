import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { PageHome } from './components/PageHome';
import { PageSpecial } from './components/PageSpecial';
import { PageLogin } from './components/PageLogin';
import { PageSignUp } from './components/PageSignUp';
import { PageNotFound } from './components/PageNotFound';

function App() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const backend = JSON.parse(localStorage.getItem('back'));
    const token = JSON.parse(localStorage.getItem('token'));
    if (backend && token) {
      setLogged(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Nav logged={logged} setLogged={setLogged} />
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='/login' element={<PageLogin setLogged={setLogged} />} />
        <Route path='/sign-up' element={<PageSignUp setLogged={setLogged} />} />
        <Route
          path='/special'
          element={<PageSpecial setLogged={setLogged} />}
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
