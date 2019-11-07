import React, { Component } from 'react';
import Lottery from './Lottery';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lottery />
        <Lottery title="Mini Daily" maxNum={30} numBalls={4} />
      </div>
    )
  }
}
export default App;
