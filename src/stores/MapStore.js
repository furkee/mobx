import { observable, action } from 'mobx';

export default class MapStore {
  @observable mapPosition = [41, 29];
  @observable mapZoom = 10;
  @observable selectedStation;

  @action setStation(station) {
    this.selectedStation = station;
  }
}
