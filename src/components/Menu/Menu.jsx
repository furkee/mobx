import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Menu.css';

@observer
class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        My sweet fucking menu
      </div>
    );
  }
}

export default Menu;
