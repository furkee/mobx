import React, { Component } from 'react';
import { observer, inject, PropTypes as MobxProp } from 'mobx-react';
import MenuStore from '../../stores/MenuStore';
import RouteStore from '../../stores/RouteStore';
import StationStore from '../../stores/StationStore';
import { TextButton } from '../common/';
import './Menu.css';

@inject(MenuStore.name, RouteStore.name, StationStore.name)
@observer
export default class Menu extends Component {
  static propTypes = {
    MenuStore: MobxProp.observableObject.isRequired,
    RouteStore: MobxProp.observableObject.isRequired,
    StationStore: MobxProp.observableObject.isRequired,
  }

  // eslint-disable-next-line
  renderRoute = (route) => {
    const { routeId, name } = route;

    return (
      <li key={routeId}>
        <TextButton onClick={() => console.log(route)}>
          {name}
        </TextButton>
      </li>
    );
  }

  renderStation = (station) => {
    const { stopId, stopName } = station;

    return (
      <li key={stopId}>
        <TextButton
          className={this.props.MenuStore.isEditedStation(station) ? 'edited' : ''}
          onClick={() => this.props.MenuStore.selectStation(station)}
        >
          {stopName}
        </TextButton>
      </li>
    );
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu-options-container">
          <TextButton onClick={() => this.props.MenuStore.openRoutes()}>
            Rotalar
          </TextButton>
          <TextButton onClick={() => this.props.MenuStore.openStations()}>
            Duraklar
          </TextButton>
        </div>
        <ul>
          {
            this.props.MenuStore.routesOpen
              ? this.props.RouteStore.routes.map(r => this.renderRoute(r))
              : this.props.StationStore.stations.map(s => this.renderStation(s))
          }
        </ul>
      </div>
    );
  }
}
