import React, { Component } from 'react';
import { observer, inject, PropTypes as MobxProp } from 'mobx-react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import MapStore from '../../stores/MapStore';
import './MapContainer.css';

@inject(MapStore.name)
@observer
export default class MapContainer extends Component {
  static propTypes = {
    MapStore: MobxProp.observableObject.isRequired,
  }
  // eslint-disable-next-line
  renderMarker = (station) => {
    return (
      <Marker position={[station.lat, station.lon]} key={station.stopId}>
        <Popup>
          <span>{station.stopName}</span>
        </Popup>
      </Marker>
    );
  }

  render() {
    const mapStore = this.props.MapStore;

    return (
      <Map center={mapStore.mapPosition.slice()} zoom={mapStore.mapZoom} className="map-container">
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          mapStore.selectedStation
            ? this.renderMarker(mapStore.selectedStation)
            : null
        }
      </Map>
    );
  }
}
