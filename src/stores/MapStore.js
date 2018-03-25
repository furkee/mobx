import { observable, action, reaction } from 'mobx';

export default class MapStore {
  configurationStore;
  @observable mapPosition;
  @observable mapZoom;
  @observable selectedStation;

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
    this.selectedStation = null;
    this.mapPosition = [41, 29];
    this.mapZoom = 10;
  }

  @action setStation(station) {
    if (station) {
      this.selectedStation = station;
      this.mapZoom = 12;
      this.mapPosition = [station.lat, station.lon];
    }
    else {
      this.setDefaults();
    }
  }
}
