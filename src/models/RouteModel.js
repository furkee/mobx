import { observable } from 'mobx';

export default class RouteModel {
  @observable name;
  @observable routeId;
  @observable routeType;
  @observable lineId;
  @observable agencyId;
  @observable stops;
  @observable trips;

  constructor(json) {
    this.name = '';
    this.routeId = '';
    this.routeType = '';
    this.lineId = '';
    this.agencyId = '';
    this.stops = [];
    this.trips = [{}];

    if (json) this.init(json);
  }

  init(json) {
    this.name = json.name;
    this.routeId = json.routeId;
    this.routeType = json.routeType;
    this.lineId = json.lineId;
    this.agencyId = json.agencyId;
    this.stops = json.stops;
    this.trips = json.trips;
  }
}
