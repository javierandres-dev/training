import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Exercises } from './Exercises';

function Navigation() {
  return (
    <BrowserRouter>
      <nav className='py-4 text-center'>
        <Link className='mx-2' to='/'>
          Home
        </Link>
        <Link className='mx-2' to='/exercises'>
          Exercises
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercises' element={<Exercises />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
