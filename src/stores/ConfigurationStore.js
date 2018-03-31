import { observable, action, reaction } from 'mobx';
import StationModel from '../models/StationModel';
import { diff } from '../utils/';

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

  @action.bound removeUneditesFromEditedStations() {
    /* eslint-disable */
    const copyEdited = { ...this.editedStations };
    for (const key of Object.keys(copyEdited)) {
      if (!this.isEditedStation(this.editedStations[key].edited)) {
        delete this.editedStations[key];
      }
    }
    /* eslint-enable */
  }

  @action setStation(station) {
    this.removeUneditesFromEditedStations();

    if (!station) {
      this.currentStation = null;
      return;
    }

    if (this.editedStations[station.stopId]) {
      this.currentStation = this.editedStations[station.stopId].edited;
    }
    else {
      this.currentStation = new StationModel({ ...station });
      this.editedStations[station.stopId] = {
        edited: this.currentStation,
        originalCopy: new StationModel({ ...station }),
      };
    }
  }

  printSavedObjects() {
    /* eslint-disable */
    for (const key of Object.keys(this.editedStations)) {
      const edited = this.editedStations[key].edited;
      const orig = this.editedStations[key].originalCopy;

      if (this.isEditedStation(edited)) {
        const onlyEditedFields = {
          ...diff(edited, orig), stopId: orig.stopId
        };

        console.log('Saving changes in station', edited.stopId);
        console.log('Changed fields: ', onlyEditedFields);
      }
    }
    /* eslint-enable */
  }

  @action save() {
    this.printSavedObjects();

    this.editedStations = {};
    this.setStation(this.menuStore.selectedStation);
  }

  isEditedStation(station) {
    if (!station) {
      return false;
    }

    const ref = this.editedStations[station.stopId];
    return !!ref && Object.keys(diff(ref.edited, ref.originalCopy)).length > 0;
  }

  getEditedStationList() {
    const list = [];
    /* eslint-disable */
    for (const key of Object.keys(this.editedStations)) {
      if (this.isEditedStation(this.editedStations[key].edited)) {
        list.push(this.editedStations[key].edited);
      }
    }
    /* eslint-enable */
    return list;
  }

  getOriginalCopyOfEditedStation() {
    if (!this.currentStation) {
      return null;
    }

    return this.editedStations[this.currentStation.stopId].originalCopy;
  }

  @action setField(key, value) {
    this.currentStation[key] = value;
    this.currentStation = new StationModel({ ...this.currentStation });
    this.editedStations = {
      ...this.editedStations,
      [this.currentStation.stopId]: {
        edited: this.currentStation,
        originalCopy: this.editedStations[this.currentStation.stopId].originalCopy,
      },
    };
  }

  @action setNumberField(key, value) {
    this.setField(key, Number(value));
  }
}
