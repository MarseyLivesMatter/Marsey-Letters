import React, { Component } from 'react';
import logo from './logo.svg';
import LetterInput from './components/LetterInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LetterInput />
      </div>
    );
  }
}

export default App;
