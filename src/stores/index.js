import RouteStore from './RouteStore';
import StationStore from './StationStore';

const stores = {
  RouteStore: new RouteStore(),
  StationStore: new StationStore(),
};

export default { ...stores };
