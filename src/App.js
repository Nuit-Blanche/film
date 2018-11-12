import React, { Component } from 'react';
import './App.css';
import Formulaire from './Formulaire';
import Fetch from './Fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Formulaire/>
        <Fetch/>
      </div>
    );
  }
}

export default App;