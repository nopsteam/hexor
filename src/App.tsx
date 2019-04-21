import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor } from './editor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Editor></Editor>
        </header>
      </div>
    );
  }
}

export default App;
