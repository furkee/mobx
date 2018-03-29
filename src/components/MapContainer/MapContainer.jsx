import React, { Component } from 'react';
import { observer, inject, PropTypes as MobxProp } from 'mobx-react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import MapStore from '../../stores/MapStore';
import { marker } from '../../images/';
import './MapContainer.css';

const customMarker = new Leaflet.Icon({
  iconUrl: marker,
  iconSize: [38, 42],
});

@inject(MapStore.name)
@observer
export default class MapContainer extends Component {
  static propTypes = {
    MapStore: MobxProp.observableObject.isRequired,
  }

  createNewMarker = () => {
    const { lat, lng } = this.originalMarker.leafletElement.getLatLng();
    this.props.MapStore.setNewPosition(lat, lng);
  }
  // eslint-disable-next-line
  renderMarker = (station, position) => {
    return (
      <Marker
        // eslint-disable-next-line
        ref={el => this.originalMarker = el}
        position={position}
        draggable={!this.props.MapStore.newPosition}
        onDragend={() => this.createNewMarker()}
      >
        <Popup>
          <span>{station.stopName}</span>
        </Popup>
      </Marker>
    );
  }

  updateNewPosition = (event) => {
    const { lat, lng } = event.latlng;
    this.props.MapStore.setNewPosition(lat, lng);
  }
  // eslint-disable-next-line
  renderNewPosition = (position) => {
    return (
      <Marker
        position={position.slice()}
        icon={customMarker}
        draggable
        onDrag={event => this.updateNewPosition(event)}
      >
        <Popup>
          <span>New position of station</span>
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
            ? this.renderMarker(mapStore.selectedStation, mapStore.mapPosition.slice())
            : null
        }
        {
          mapStore.newPosition
            ? this.renderNewPosition(mapStore.newPosition)
            : null
        }
      </Map>
    );
  }
}
