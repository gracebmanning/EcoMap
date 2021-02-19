import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import { Icon, InlineIcon } from '@iconify/react';
import mapMarker from '@iconify-icons/el/map-marker';


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
        bootstrapURLKeys={{ key: '' }}
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