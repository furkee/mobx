import React, { Component } from 'react';
import { observer, inject, PropTypes as MobxProps } from 'mobx-react';
import './Configuration.css';
import ConfigurationStore from '../../stores/ConfigurationStore';

@inject(ConfigurationStore.name)
@observer
export default class Configuration extends Component {
  static propTypes = {
    ConfigurationStore: MobxProps.observableObject.isRequired,
  }

  renderConfigForm = (station) => {
    const confStore = this.props.ConfigurationStore;
    return (
      <form>
        <input
          type="text"
          value={station.stopName}
          onChange={event => confStore.setField('stopName', event.target.value)}
        />
      </form>
    );
  }

  render() {
    return (
      <div className="configuration-container">
        {
          this.props.ConfigurationStore.currentStation
            ? this.renderConfigForm(this.props.ConfigurationStore.currentStation)
            : <p>Menüden bir durak seçin</p>
        }
      </div>
    );
  }
}
