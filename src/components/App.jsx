import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Panel from './Panel';
import './App.css';

@observer
class App extends Component {
  render() {
    return (
      <div className="app">
        <Panel />
        <p>IETT durakları FTW</p>
      </div>
    );
  }
}

export default App;
