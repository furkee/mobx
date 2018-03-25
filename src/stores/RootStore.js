import RouteStore from './RouteStore';
import StationStore from './StationStore';
import PanelStore from './PanelStore';
import MenuStore from './MenuStore';
import MapStore from './MapStore';
import ConfigurationStore from './ConfigurationStore';

export default class RootStore {
  constructor() {
    this.RouteStore = new RouteStore(this);
    this.StationStore = new StationStore(this);
    this.PanelStore = new PanelStore(this);
    this.MenuStore = new MenuStore(this);
    this.MapStore = new MapStore(this);
    this.ConfigurationStore = new ConfigurationStore(this);
  }
}
