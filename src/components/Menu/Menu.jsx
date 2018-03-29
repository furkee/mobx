import React, { Component } from 'react';
import { observer, inject, PropTypes as MobxProp } from 'mobx-react';
import MenuStore from '../../stores/MenuStore';
import RouteStore from '../../stores/RouteStore';
import StationStore from '../../stores/StationStore';
import { TextButton } from '../common/';
import Pagination from './components/Pagination';
import './Menu.css';

@inject(MenuStore.name, RouteStore.name, StationStore.name)
@observer
export default class Menu extends Component {
  static propTypes = {
    MenuStore: MobxProp.observableObject.isRequired,
    RouteStore: MobxProp.observableObject.isRequired,
    StationStore: MobxProp.observableObject.isRequired,
  }

  currentPage = () => (
    this.props.MenuStore.routesOpen
      ? this.props.RouteStore.page
      : this.props.StationStore.page
  )

  paginate = (page) => {
    if (this.props.MenuStore.routesOpen) {
      this.props.RouteStore.fetchRoutes(page);
    }
    else {
      this.props.StationStore.fetchStations(page);
    }
  }

  // eslint-disable-next-line
  renderRoute = (route) => {
    const { routeId, name } = route;

    return (
      <li key={routeId}>
        <TextButton onClick={() => this.props.MenuStore.selectRoute(route)}>
          {name}
        </TextButton>
      </li>
    );
  }

  renderStation = (station) => {
    const selected = this.props.MenuStore.isSelectedStation(station);
    const edited = this.props.MenuStore.isEditedStation(station);

    return (
      <li key={station.stopId} className={selected ? 'active' : ''}>
        <TextButton
          className={edited ? 'edited' : ''}
          onClick={() => this.props.MenuStore.selectStation(station)}
        >
          {station.stopName}
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
        <div className="menu-list-container">
          <ul>
            {
              this.props.MenuStore.routesOpen
                ? this.props.RouteStore.routes.map(r => this.renderRoute(r))
                : this.props.StationStore.stations.map(s => this.renderStation(s))
            }
          </ul>
        </div>
        <div className="menu-paginator-container">
          <Pagination
            total={20}
            current={this.currentPage}
            callback={page => this.paginate(page)}
          />
        </div>
      </div>
    );
  }
}
