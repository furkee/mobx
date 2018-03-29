import { observable, action, reaction } from 'mobx';
import StationModel from '../models/StationModel';

export default class ConfigurationStore {
  menuStore;
  /**
   * On station selection, copies original values, and allows edits only on this copy.
   * Copy is preserved in state as long as it is not disregarded, or saved
   */
  @observable currentStation = null;
  /** A map that holds dirty(edited) stations for quick lookup and retrieval */
  @observable editedStations = {};

  init(rootStore) {
    this.menuStore = rootStore.MenuStore;

    reaction(
      () => this.menuStore.selectedStation,
      station => this.setStation(station),
    );
  }

  @action setStation(station) {
    if (station === null) {
      this.currentStation = null;
      return;
    }

    this.currentStation = this.editedStations[station.stopId]
      || new StationModel({ ...station });
  }

  @action save() {
    /* eslint-disable */
    for (const key of Object.keys(this.editedStations)) {
      console.log('Saving changes in station ' + this.editedStations[key].stopId);
    }
    /* eslint-enable */

    this.currentStation = new StationModel({ ...this.menuStore.selectedStation });
    this.editedStations = {};
  }

  isEditedStation(station) {
    return !!this.editedStations[station.stopId];
  }

  @action setField(key, value) {
    this.currentStation[key] = value;
    this.currentStation = new StationModel({ ...this.currentStation });
    this.editedStations = {
      ...this.editedStations, [this.currentStation.stopId]: this.currentStation,
    };
  }

  @action setNumberField(key, value) {
    this.setField(key, Number(value));
  }
}
