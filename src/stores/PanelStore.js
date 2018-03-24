import { observable, action } from 'mobx';

export default class PanelStore {
  @observable hamburgerActive = false;

  @action setHamburgerActive(active) {
    this.hamburgerActive = active;
  }

  @action switchHamburgerMenu() {
    this.hamburgerActive = !this.hamburgerActive;
  }
}
