import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import Panel from './Panel';
import MapContainer from './MapContainer';
import Configuration from './Configuration';

@observer
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Panel />
        <MapContainer />
        <Configuration />
      </div>
    );
  }
}
