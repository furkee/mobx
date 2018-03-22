import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';

@observer
class App extends Component {
  render() {
    return (
      <div className="app">
        <p>IETT durakları FTW</p>
      </div>
    );
  }
}

export default App;
