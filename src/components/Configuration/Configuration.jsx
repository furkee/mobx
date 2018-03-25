import React, { Component } from 'react';
import { observer, inject, PropTypes as MobxProps } from 'mobx-react';
import ConfigurationStore from '../../stores/ConfigurationStore';
import { Input } from '../common';
import './Configuration.css';

@inject(ConfigurationStore.name)
@observer
export default class Configuration extends Component {
  static propTypes = {
    ConfigurationStore: MobxProps.observableObject.isRequired,
  }

  renderConfigForm = (station) => {
    const confStore = this.props.ConfigurationStore;
    return (
      <form className="config-form">
        <Input
          type="text"
          label="Stop name"
          value={station.stopName}
          onChange={event => confStore.setField('stopName', event.target.value)}
        />
        <Input
          type="text"
          label="District"
          value={station.district}
          onChange={event => confStore.setField('district', event.target.value)}
        />
        <Input
          type="checkbox"
          label="Point of interest"
          checked={station.isPoi}
          onChange={() => confStore.setField('isPoi', !station.isPoi)}
        />
        <Input
          type="number"
          label="Latitude"
          value={station.lat}
          onChange={event => confStore.setField('lat', event.target.value)}
        />
        <Input
          type="number"
          label="Longitude"
          value={station.lon}
          onChange={event => confStore.setField('lon', event.target.value)}
        />
      </form>
    );
  }

  render() {
    return (
      this.props.ConfigurationStore.currentStation
        ? <div className="configuration-container">
          {this.renderConfigForm(this.props.ConfigurationStore.currentStation)}
        </div>
        : null
    );
  }
}
