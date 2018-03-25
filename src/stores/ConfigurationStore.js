import { observable, action } from 'mobx';
import StationModel from '../models/StationModel';

export default class ConfigurationStore {
  mapStore;
  @observable currentStation = null;
  @observable originalStation = null;
  @observable editedStations = {};

  @action setStation(station) {
    if (this.currentStation && this.currentStation === this.originalStation) {
      console.log('edited mark');
      this.editedStations[this.currentStation.stopId] = this.currentStation;
    }

    this.originalStation = station;
    this.currentStation = new StationModel({ ...station });
  }

  @action save() {
    this.currentStation = null;
    this.editedStations = null;
  }

  isEditedStation(station) {
    return !!this.editedStations[station.stopId];
  }
}
