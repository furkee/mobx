import { observable, action } from 'mobx';

export default class PanelStore {
  configurationStore;
  @observable hamburgerActive = false;

  init(rootStore) {
    this.configurationStore = rootStore.ConfigurationStore;
  }

  @action setHamburgerActive(active) {
    this.hamburgerActive = active;
  }

  @action switchHamburgerMenu() {
    this.hamburgerActive = !this.hamburgerActive;
  }

  @action save() {
    this.configurationStore.save();
  }
}
