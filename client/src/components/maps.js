import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import mapStyles from './mapStyles';

const containerStyle = {
  width: '35vw',
  height: '50vh'
};

const center = {
  lat: 40.712776,
  lng: -74.005974
};

const options = {
    styles: mapStyles
}

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBabJegG-adesPr66yEcc7JhrVa297ZiPs"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)