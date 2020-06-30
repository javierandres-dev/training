import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm'
import ViewList from './components/ViewList'

class App extends Component {
  state = {
    ruta: 'lista',
  }
  render () {
    const { ruta } = this.state
    return (
      <div className="App">
        {ruta === 'formulario' && <UserForm />}
        {ruta === 'lista' && <ViewList />}
      </div>
    )
  }
}
export default App
/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */