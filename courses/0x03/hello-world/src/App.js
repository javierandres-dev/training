import React from 'react';
import Cabecera from './components/Cabecera'
import './App.css';

function App() {
  return (
    <div className="App">
      <Cabecera miau={'Bienvenido miau'}/>
      <Cabecera miau={'Bienvenido guau'}/>
    </div>
  );
}

export default App;
