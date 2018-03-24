import RouteStore from './RouteStore';
import StationStore from './StationStore';
import PanelStore from './PanelStore';
import MenuStore from './MenuStore';
import MapStore from './MapStore';

const stores = {
  RouteStore: new RouteStore(),
  StationStore: new StationStore(),
  PanelStore: new PanelStore(),
  MenuStore: new MenuStore(),
  MapStore: new MapStore(),
};

export default { ...stores };
