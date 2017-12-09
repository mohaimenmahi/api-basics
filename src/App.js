import React, { Component } from 'react';
import Apicalls from './Apicalls';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">API Basics</h1>
        </header>
        <Apicalls />
      </div>
    );
  }
}

export default App;
