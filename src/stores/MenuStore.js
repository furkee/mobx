import { observable, action } from 'mobx';

export default class MenuStore {
  @observable routesOpen = true;

  @action openRoutes() {
    this.routesOpen = true;
  }

  @action openStations() {
    this.routesOpen = false;
  }
}
