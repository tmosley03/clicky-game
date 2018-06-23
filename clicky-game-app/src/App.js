import React, { Component } from 'react';
import GameSpace from "./components/game-space";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="whole-page">
        <div className="container app-container">
          <GameSpace />
        </div>
      </div>
    );
  }
}

export default App;
