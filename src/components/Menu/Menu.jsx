import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import './Menu.css';
import RouteModel from '../../models/RouteModel';

@observer
class Menu extends Component {
  static propTypes = {
    routes: PropTypes.observableArrayOf(RouteModel).isRequired,
  }

  // eslint-disable-next-line
  renderRoute = (route) => {
    return (
      <li key={route.routeId}>
        {route.name}
      </li>
    );
  }

  render() {
    return (
      <div className="menu-container">
        <ul>
          {
            this.props.routes
              ? this.props.routes.slice().map(r => this.renderRoute(r))
              : null
          }
        </ul>
      </div>
    );
  }
}

export default Menu;
