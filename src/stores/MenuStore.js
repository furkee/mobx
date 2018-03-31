import { observable, action, computed } from 'mobx';

export default class MenuStore {
  configurationStore;
  routeStore;
  stationStore;
  @observable routesOpen = true;
  @observable selectedStation;
  @observable selectedRoute;

  init(rootStore) {
    this.configurationStore = rootStore.ConfigurationStore;
    this.routeStore = rootStore.RouteStore;
    this.stationStore = rootStore.StationStore;
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

  @action paginate(page) {
    if (this.routesOpen) {
      this.routeStore.fetchRoutes(page);
    }
    else {
      this.stationStore.fetchStations(page);
    }
  }

  @computed get currentPage() {
    return this.routesOpen
      ? this.routeStore.page
      : this.stationStore.page;
  }

  @computed get getStations() {
    const editedStations = this.configurationStore.getEditedStationList();
    const stations = this.stationStore.stations
      .filter(s => !this.configurationStore.isEditedStation(s));

    return editedStations.concat(stations);
  }

  @computed get getRoutes() {
    return this.routeStore.routes;
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
