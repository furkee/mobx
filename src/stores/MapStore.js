import { observable, action, reaction } from 'mobx';
import StationModel from '../models/StationModel';

export default class MapStore {
  configurationStore;
  @observable mapPosition;
  @observable mapZoom;
  @observable selectedStation;
  @observable newPosition;

  constructor() {
    this.setDefaults();
  }

  init(rootStore) {
    this.configurationStore = rootStore.ConfigurationStore;

    reaction(
      () => this.configurationStore.currentStation,
      station => this.setStation(station),
    );
  }

  @action setDefaults() {
    this.mapPosition = [41, 29];
    this.mapZoom = 10;
    this.selectedStation = null;
    this.newPosition = null;
  }

  /** if station is the same as selectedStation, then we received an edit */
  _isUpdate(station) {
    if (this.selectedStation && station) {
      return this.selectedStation.stopId === station.stopId;
    }

    return false;
  }

  @action setStation(station) {
    // eslint-disable-next-line
    if(this._isUpdate(station)) {
      this.newPosition = [parseFloat(station.lat), parseFloat(station.lon)];
      return;
    }

    if (station) {
      this.selectedStation = new StationModel({ ...station });
      this.mapZoom = 12;
      this.mapPosition = [station.lat, station.lon];
      this.newPosition = null;
    }
    else {
      this.setDefaults();
    }
  }
}
