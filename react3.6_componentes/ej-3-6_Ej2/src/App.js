import React, { Component } from 'react';
import './App.css';
import HalfPage from './components/HalfPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HalfPage data= "HalfPage_left">
        <h1>
          Holi
        </h1>
        <p>
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>
      </HalfPage>

        <HalfPage data= "HalfPage_right">
        <h1>
          Holi
        </h1>
        <p>
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>
      </HalfPage>
      </div>
    );
  }
}

export default App;
