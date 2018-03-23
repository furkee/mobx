import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapContainer.css';

@observer
export default class MapContainer extends Component {
  constructor() {
    super();

    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <Map center={position} zoom={this.state.zoom} className="map-container">
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}
