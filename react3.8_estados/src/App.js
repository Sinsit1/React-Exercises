import React, { Component } from 'react';
import './App.css';
import Clock from './componentes/Clock'
import SheepCounter from './componentes/SheepCounter'


class App extends Component {


  render() {
    return (
      <div className="App">
        <Clock />
        <SheepCounter />
        
      </div>
    );
  }
}

export default App;
