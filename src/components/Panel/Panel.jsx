import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import Menu from '../Menu/';
import './Panel.css';
import RouteModel from '../../models/RouteModel';

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
          <img
            alt="H"
            className="hamburger"
            // eslint-disable-next-line
            src={require('../../images/hamburger.png')}
          />
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
