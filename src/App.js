import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard.js';
import Wizard from './component/Wizard/Wizard.js';
import Header from './component/Header/Header.js';

class App extends Component {
  render() {
    return (
      <div>
        <Dashboard />
        <Wizard />
        <Header />
      </div>
    );
  }
}

export default App;
