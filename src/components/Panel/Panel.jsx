import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import RouteModel from '../../models/RouteModel';
import { hamburger } from '../../images';
import Menu from '../Menu/';
import './Panel.css';

@observer
export default class Panel extends Component {
  static propTypes = {
    routes: PropTypes.observableArrayOf(RouteModel).isRequired,
  }

  constructor() {
    super();

    this.state = { isMenuOpen: true };
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
            ? <Menu routes={this.props.routes} />
            : null
        }
        <p className="header">IETT KONTROL PANELİ</p>
        <button className="text-button save-button">KAYDET</button>
      </div>
    );
  }
}
