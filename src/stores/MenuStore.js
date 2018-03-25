import { observable, action, reaction } from 'mobx';

export default class MenuStore {
  configurationStore;
  @observable routesOpen = true;
  @observable selectedStation;
  @observable selectedRoute;
  @observable editedStations = [];

  init(rootStore) {
    this.configurationStore = rootStore.ConfigurationStore;

    reaction(
      () => this.configurationStore.editedStations,
      // eslint-disable-next-line
      editedStations => this.editedStations = Object.keys(editedStations),
    );
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
    this.selectedStation = station;
  }

  @action selectRoute(route) {
    this.selectedRoute = route;
  }
}
