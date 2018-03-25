import RouteStore from './RouteStore';
import StationStore from './StationStore';
import PanelStore from './PanelStore';
import MenuStore from './MenuStore';
import MapStore from './MapStore';
import ConfigurationStore from './ConfigurationStore';

const stores = {
  RouteStore: new RouteStore(),
  StationStore: new StationStore(),
  PanelStore: new PanelStore(),
  MenuStore: new MenuStore(),
  MapStore: new MapStore(),
  ConfigurationStore: new ConfigurationStore(),
};

export default { ...stores };
