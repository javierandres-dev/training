import './App.css';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';

function App() {
  const [logged, setLogged] = useState(false);
  const [mainView, setMainView] = useState(null);

  useEffect(() => {
    const backend = JSON.parse(localStorage.getItem('back'));
    const token = JSON.parse(localStorage.getItem('token'));
    if (backend && token) {
      setLogged(true);
    }
  }, []);

  useEffect(() => {
    if (logged) {
      setMainView('greet');
    }
  }, [logged]);

  return (
    <>
      <Header />
      <Nav logged={logged} setLogged={setLogged} setMainView={setMainView} />
      <Main
        mainView={mainView}
        setMainView={setMainView}
        logged={logged}
        setLogged={setLogged}
      />
      <Aside />
      <Footer />
    </>
  );
}

export default App;
