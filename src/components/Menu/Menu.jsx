import React, { Component } from 'react';
import { observer, inject, PropTypes as MobxProp } from 'mobx-react';
import MenuStore from '../../stores/MenuStore';
import { TextButton } from '../common/';
import './Menu.css';

@inject(MenuStore.name)
@observer
export default class Menu extends Component {
  static propTypes = {
    routes: MobxProp.arrayOrObservableArray.isRequired,
    stations: MobxProp.arrayOrObservableArray.isRequired,
    MenuStore: MobxProp.observableObject.isRequired,
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
          <TextButton onClick={() => this.props.MenuStore.openRoutes()}>
            Duraklar
          </TextButton>
          <TextButton onClick={() => this.props.MenuStore.openStations()}>
            Rotalar
          </TextButton>
        </div>
        <ul>
          {
            this.props.MenuStore.routesOpen
              ? this.props.routes.map(r => this.renderRoute(r))
              : this.props.stations.map(s => this.renderStation(s))
          }
        </ul>
      </div>
    );
  }
}
