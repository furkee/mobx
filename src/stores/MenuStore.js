import { observable, action, reaction } from 'mobx';

export default class MenuStore {
  configurationStore;
  @observable routesOpen = true;
  @observable selectedStation;
  @observable selectedRoute;

  init(rootStore) {
    this.configurationStore = rootStore.ConfigurationStore;

    reaction(() => this.configurationStore.editedStations);
  }

  isEditedStation(station) {
    return this.configurationStore.isEditedStation(station);
  }

  isSelectedStation(station) {
    if (this.selectedStation && station) {
      return this.selectedStation.stopId === station.stopId;
    }

    return false;
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
