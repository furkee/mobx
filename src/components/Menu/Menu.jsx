import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import RouteModel from '../../models/RouteModel';
import StationModel from '../../models/StationModel';
import './Menu.css';

@observer
export default class Menu extends Component {
  static propTypes = {
    routes: PropTypes.arrayOf(RouteModel).isRequired,
    stations: PropTypes.arrayOf(StationModel).isRequired,
  }

  constructor() {
    super();

    this.state = {
      routesOpen: false,
    };
  }

  renderRoute = (route) => {
    const { routeId, name } = route;

    return (
      <li key={routeId}>
        {name}
      </li>
    );
  }

  renderStation = (station) => {
    const { stopId, stopName } = station;

    return (
      <li key={stopId}>
        {stopName}
      </li>
    );
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu-options-container">
          <button className="text-button" ng-click={() => this.setState({ routesOpen: true })}>
            Duraklar
          </button>
          <button className="text-button" ng-click={() => this.setState({ routesOpen: false })}>
            Rotalar
          </button>
        </div>
        <ul>
          {
            this.state.routesOpen
              ? this.props.routes.map(r => this.renderRoute(r))
              : this.props.stations.map(s => this.renderStation(s))
          }
        </ul>
      </div>
    );
  }
}
