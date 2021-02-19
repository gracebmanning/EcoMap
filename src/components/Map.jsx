import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon, InlineIcon } from '@iconify/react';
import mapMarker from '@iconify-icons/el/map-marker';
import Geocode from "react-geocode";
import { GoogleMapsAPI } from '../client-config';
import './map.css'

Geocode.setApiKey( GoogleMapsAPI );


const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={mapMarker} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: {GoogleMapsAPI}, libraries: 'places' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map