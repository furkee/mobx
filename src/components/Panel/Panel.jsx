import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import Menu from '../Menu/';
import './Panel.css';

@observer
class Panel extends Component {
  static propTypes = {
    store: PropTypes.observableObject.isRequired,
  }

  constructor() {
    super();

    this.state = { isMenuOpen: true };
  }

  componentWillMount() {
    this.props.store.fetchStations();
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
