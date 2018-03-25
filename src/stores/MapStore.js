import { observable, action, reaction } from 'mobx';
import StationModel from '../models/StationModel';

export default class MapStore {
  configurationStore;
  stationStore;
  /** Center of map, also original position for currently edited station */
  @observable mapPosition;
  @observable mapZoom;
  /** exact copy of currently edited station */
  @observable selectedStation;
  /** if coordinates were edited, new coordinates will be here */
  @observable newPosition;

  constructor() {
    this.setDefaults();
  }

  init(rootStore) {
    this.configurationStore = rootStore.ConfigurationStore;
    this.stationStore = rootStore.StationStore;

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

  _compareAndSetPositions(station) {
    const original = this.stationStore.getById(station.stopId);
    const latMatch = original.lat.toString() === station.lat.toString();
    const lonMatch = original.lon.toString() === station.lon.toString();

    this.mapPosition = [original.lat, original.lon];
    this.newPosition = latMatch && lonMatch
      ? null
      : [station.lat, station.lon];
  }

  @action setStation(station) {
    if (station) {
      this.selectedStation = new StationModel({ ...station });
      this.mapZoom = 12;
      // eslint-disable-next-line
      this._compareAndSetPositions(station);
    }
    else {
      this.setDefaults();
    }
  }
}
