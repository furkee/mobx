import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Menu from '../Menu/';
import './Panel.css';

@observer
class Panel extends Component {
  constructor() {
    super();

    this.state = { isMenuOpen: true };
  }

  openHamburgerMenu = () => {
    console.log(this.state.isMenuOpen);
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    return (
      <div className="panel-container">
        <button
          className="text-button"
          onClick={this.openHamburgerMenu}
        >
          <img
            alt="H"
            className="hamburger"
            src={require('../../images/hamburger.png')}
          />
        </button>
        {
          this.state.isMenuOpen
            ? <Menu />
            : null
        }
        <p className="header">IETT KONTROL PANELİ</p>
        <button className="text-button save-button">KAYDET</button>
      </div>
    );
  }
}

export default Panel;
