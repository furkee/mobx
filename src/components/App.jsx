import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Panel from './Panel';
import StationStore from '../stores/StationStore';
import './App.css';

@observer
class App extends Component {
  render() {
    const store = new StationStore();

    return (
      <div className="app">
        <Panel store={store} />
        <p>IETT durakları FTW</p>
      </div>
    );
  }
}

export default App;
