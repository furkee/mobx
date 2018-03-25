import React, { Component } from 'react';
import { observer, inject, PropTypes as MobxProp } from 'mobx-react';
import MenuStore from '../../stores/MenuStore';
import MapStore from '../../stores/MapStore';
import ConfigurationStore from '../../stores/ConfigurationStore';
import { TextButton } from '../common/';
import './Menu.css';

@inject(MenuStore.name, MapStore.name, ConfigurationStore.name)
@observer
export default class Menu extends Component {
  static propTypes = {
    routes: MobxProp.arrayOrObservableArray.isRequired,
    stations: MobxProp.arrayOrObservableArray.isRequired,
    MenuStore: MobxProp.observableObject.isRequired,
    MapStore: MobxProp.observableObject.isRequired,
    ConfigurationStore: MobxProp.observableObject.isRequired,
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

  onStationClick = (station) => {
    this.props.MapStore.setStation(station);
    this.props.ConfigurationStore.setStation(station);
  }

  renderStation = (station) => {
    const { stopId, stopName } = station;
    const configurationStore = this.props.ConfigurationStore;

    return (
      <li key={stopId}>
        <TextButton
          className={configurationStore.isEditedStation(station) ? 'edited' : ''}
          onClick={() => this.onStationClick(station)}
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
              ? this.props.routes.map(r => this.renderRoute(r))
              : this.props.stations.map(s => this.renderStation(s))
          }
        </ul>
      </div>
    );
  }
}
