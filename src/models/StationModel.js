import { observable } from 'mobx';

export default class StationModel {
  @observable type;
  @observable district;
  @observable stopId;
  @observable stopName;
  @observable isPoi;
  @observable lat;
  @observable lon;
  @observable location;
  @observable routesServed;

  constructor(json) {
    this.type = '';
    this.district = '';
    this.stopId = '';
    this.stopName = '';
    this.isPoi = false;
    this.lat = 0.00;
    this.lon = 0.00;
    this.location = { type: '', coordinates: [] };
    this.routesServed = {};

    if (json) this.init(json);
  }

  init(json) {
    this.type = json.type;
    this.district = json.district;
    this.stopId = json.stopId;
    this.stopName = json.stopName;
    this.isPoi = json.isPoi;
    this.lat = json.lat;
    this.lon = json.lon;
    this.location = json.location;
    this.routesServed = json.routesServed;
  }
}
