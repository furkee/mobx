/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { hamburger } from '../../images';
import RouteStore from '../../stores/RouteStore';
import StationStore from '../../stores/StationStore';
import Menu from '../Menu/';
import './Panel.css';

@inject(RouteStore.name, StationStore.name)
@observer
export default class Panel extends Component {
  constructor() {
    super();

    this.state = { isMenuOpen: true };
  }

  componentWillMount() {
    this.props.RouteStore.fetchRoutes();
    this.props.StationStore.fetchStations();
  }

  openHamburgerMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    return (
      <div className="panel-container">
        <button
          type="button"
          className="text-button"
          onClick={this.openHamburgerMenu}
        >
          <img alt="H" className="hamburger" src={hamburger} />
        </button>
        {
          this.state.isMenuOpen
            ? <Menu
              routes={this.props.RouteStore.routes}
              stations={this.props.StationStore.stations}
            />
            : null
        }
        <p className="header">IETT KONTROL PANELİ</p>
        <button className="text-button save-button">KAYDET</button>
      </div>
    );
  }
}
