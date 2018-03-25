import { observable, action, reaction } from 'mobx';
import StationModel from '../models/StationModel';

export default class ConfigurationStore {
  menuStore;
  @observable currentStation = null;
  @observable editedStations = {};

  init(rootStore) {
    this.menuStore = rootStore.MenuStore;

    reaction(
      () => this.menuStore.selectedStation,
      station => this.setStation(station),
    );
  }

  @action setStation(station) {
    this.currentStation = this.editedStations[station.stopId]
      || new StationModel({ ...station });
  }

  @action save() {
    /* eslint-disable */
    for (const key of Object.keys(this.editedStations)) {
      console.log('Saving changes in station ' + this.editedStations[key].stopId);
    }
    /* eslint-enable */

    this.currentStation = null;
    this.editedStations = {};
  }

  isEditedStation(station) {
    return !!this.editedStations[station.stopId];
  }

  @action setField(key, value) {
    this.currentStation[key] = value;
    this.editedStations[this.currentStation.stopId] = this.currentStation;
  }
}
