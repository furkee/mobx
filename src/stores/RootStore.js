import RouteStore from './RouteStore';
import StationStore from './StationStore';
import PanelStore from './PanelStore';
import MenuStore from './MenuStore';
import MapStore from './MapStore';
import ConfigurationStore from './ConfigurationStore';

export default class RootStore {
  constructor() {
    this.RouteStore = new RouteStore();
    this.StationStore = new StationStore();
    this.PanelStore = new PanelStore();
    this.MenuStore = new MenuStore();
    this.MapStore = new MapStore();
    this.ConfigurationStore = new ConfigurationStore();

    this.init();
  }

  /* eslint-disable */
  init() {
    for (const key of Object.keys(this)) {
      try {
        this[key].init(this);
      }
      catch (ex) {}
    } 
  }
  /* eslint-enable */
}
