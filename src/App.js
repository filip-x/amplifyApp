import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './tictactoe/src/App';

function App() {
  return (
      <Game/>,
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
    </div>
  );
}

export default App;
