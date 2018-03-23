import React, { Component } from 'react';
import { observer, inject, PropTypes } from 'mobx-react';
import './App.css';
import Panel from './Panel';

@inject('RouteStore', 'StationStore')
@observer
class App extends Component {
  static propTypes = {
    RouteStore: PropTypes.observableObject.isRequired,
    StationStore: PropTypes.observableObject.isRequired,
  }

  componentWillMount() {
    const { RouteStore, StationStore } = this.props;

    RouteStore.fetchRoutes();
    StationStore.fetchStations();
  }

  render() {
    console.log(this.props.RouteStore.routes.slice());
    return (
      <div className="app">
        <Panel routes={this.props.RouteStore.routes} />
        <p>IETT durakları FTW</p>
        {
          this.props.RouteStore.routes.map(r => <p>{r.name}</p>)
        }
      </div>
    );
  }
}

export default App;
