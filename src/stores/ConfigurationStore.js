import { observable, action, reaction } from 'mobx';
import StationModel from '../models/StationModel';

export default class ConfigurationStore {
  menuStore;
  @observable currentStation = null;
  @observable originalStation = null;
  @observable editedStations = {};

  init(rootStore) {
    this.menuStore = rootStore.MenuStore;

    reaction(
      () => this.menuStore.selectedStation,
      station => this.setStation(station),
    );
  }

  @action setStation(station) {
    this.originalStation = station;
    this.currentStation = this.editedStations[station.stopId]
      || new StationModel({ ...station });
  }

  @action save() {
    this.currentStation = null;
    this.editedStations = null;
  }

  isEditedStation(station) {
    return !!this.editedStations[station.stopId];
  }

  @action setField(key, value) {
    this.currentStation[key] = value;
    this.editedStations[this.currentStation.stopId] = this.currentStation;
  }
}
