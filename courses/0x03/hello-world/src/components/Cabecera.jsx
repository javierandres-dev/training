import React, { Component } from 'react'
import logo from '../logo.svg';
export default class Cabecera extends Component {
    render () {
        const { miau } = this.props
        return (
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <h1>Hello, World!</h1> */}
            <h1>{miau}</h1>
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
        )
    }
}