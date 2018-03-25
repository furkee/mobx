import { observable, action } from 'mobx';
import StationModel from '../models/StationModel';

export default class StationStore {
  @observable stations = [];
  @observable error = '';

  constructor() {
    this.fetchStations();
  }

  @action fetchStations() {
    fetch('http://52.29.79.10:13269/station/', { method: 'GET' })
      .then(response => response.json())
      .then(this.fetchSuccess)
      .catch(this.fetchFailure);
  }

  @action.bound fetchSuccess(json) {
    this.error = '';
    this.stations = json.dataFeed.map(d => new StationModel(d));
  }

  @action.bound fetchFailure(error) {
    this.error = error;
  }

  getById(id) {
    const res = this.stations.filter(s => s.stopId === id);
    return res.length > 0 ? res[0] : null;
  }
}
