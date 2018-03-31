import React, { Component } from 'react';
import { observer, inject, PropTypes as MobxProp } from 'mobx-react';
import MenuStore from '../../stores/MenuStore';
import { TextButton } from '../common/';
import Pagination from './components/Pagination';
import './Menu.css';

@inject(MenuStore.name)
@observer
export default class Menu extends Component {
  static propTypes = {
    MenuStore: MobxProp.observableObject.isRequired,
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
                ? this.props.MenuStore.getRoutes.map(r => this.renderRoute(r))
                : this.props.MenuStore.getStations.map(s => this.renderStation(s))
            }
          </ul>
        </div>
        <div className="menu-paginator-container">
          <Pagination
            total={20}
            current={this.props.MenuStore.currentPage}
            callback={page => this.props.MenuStore.paginate(page)}
          />
        </div>
      </div>
    );
  }
}
