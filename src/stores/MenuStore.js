import { observable, action } from 'mobx';

export default class MenuStore {
  configurationStore;
  @observable routesOpen = true;
  @observable selectedStation;
  @observable selectedRoute;

  init(rootStore) {
    this.configurationStore = rootStore.ConfigurationStore;
  }

  @action isEditedStation(station) {
    return this.configurationStore.isEditedStation(station);
  }

  @action openRoutes() {
    this.routesOpen = true;
  }

  @action openStations() {
    this.routesOpen = false;
  }

  @action selectStation(station) {
    if (this.selectedStation && this.selectedStation.stopId === station.stopId) {
      this.selectedStation = null;
    }
    else {
      this.selectedStation = station;
    }
  }

  @action selectRoute(route) {
    this.selectedRoute = route;
  }
}
