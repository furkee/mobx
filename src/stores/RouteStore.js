import { observable, action } from 'mobx';
import RouteModel from '../models/RouteModel';

export default class RouteStore {
  @observable routes = [];
  @observable error = '';

  @action fetchRoutes() {
    fetch('http://52.29.79.10:13269/route/', { method: 'GET' })
      .then(response => response.json())
      .then(this.fetchSuccess)
      .catch(this.fetchFailure);
  }

  @action.bound fetchSuccess(json) {
    this.error = '';
    this.Routes = json.dataFeed.map(d => new RouteModel(d));
  }

  @action.bound fetchFailure(error) {
    this.error = error;
  }
}
