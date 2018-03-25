import { observable, action, reaction } from 'mobx';

export default class MapStore {
  menuStore;
  @observable mapPosition = [41, 29];
  @observable mapZoom = 10;
  @observable selectedStation;

  init(rootStore) {
    this.menuStore = rootStore.MenuStore;

    reaction(
      () => this.menuStore.selectedStation,
      station => this.setStation(station),
    );
  }

  @action setStation(station) {
    this.selectedStation = station;
  }
}
