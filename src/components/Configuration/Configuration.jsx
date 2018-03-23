import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Configuration.css';

@observer
export default class Configuration extends Component {
  render() {
    return (
      <div className="configuration-container">
        Configuration be here
      </div>
    );
  }
}
