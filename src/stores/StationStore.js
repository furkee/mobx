import { observable, computed, action } from 'mobx';
import StationModel from '../models/StationModel';

export default class StationStore {
  @observable stations = [];
  @observable error = '';

  @action fetchStations() {
    fetch('http://52.29.79.10:13269/station/',{ method: 'GET' })
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
}
