import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import { Descriptions } from 'antd';
import AutoComplete from 'react-google-autocomplete';
import "./marker.css";


Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

export class TheMap extends React.Component {


state ={
  address: "",
  city: "",
  area: "",
  state: "",
  zoom: 15,
  height: 400,

  mapPosition: {
    lat:0,
    lng:0,
  },
  markerPosition: {
    lat: 0,
    lng: 0,
  }
}

componentDidMount(){
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          mapPosition: {
            lat:position.coords.latitude,
            lng:position.coords.longitude,
          },
          markerPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
        },
        () => {
          Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(response => {

            const address = response.results[0].formatted_address,
                  addressArray = response.results[0].address_componenets,
                  city = this.getCity(addressArray),
                  area = this.getArea(addressArray),
                  state = this.getState(addressArray)
        
                  this.setState({
                    address: (address) ? address : "",
                    area: (area) ? area : "",
                    city: (city) ? city : "",
                    state: (state) ? state : "",
                  })
                },
                error => {
                  console.error(error);
              }
            ); 
          })
        });
      }else {
        console.error("Geolocation is not supported by this browser!");
      }
    };

getCity = (addressArray) => {

  let city = '';
  for (let i = 0; i < addressArray.length; i++) {
    if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
        city = addressArray[i].long_name;
        return city;
    }
  }
};

getArea = (addressArray) => {
  let area = '';
  for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
          for (let j = 0; j < addressArray[i].types.length; j++) {
              if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                  area = addressArray[i].long_name;
                  return area;
              }
          }
      }
  }
};

getState = (addressArray) => {
  let state = '';
  for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
          if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
              state = addressArray[i].long_name;
              return state;
          }
      }
  }
};

onChange = (event) => {
  this.setState({ [event.target.name]: event.target.value });
};

onMarkerDragEnd = (event) => {
  let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();

  Geocode.fromLatLng(newLat, newLng).then(
      response => {
          const address = response.results[0].formatted_address,
              addressArray = response.results[0].address_components,
              city = this.getCity(addressArray),
              area = this.getArea(addressArray),
              state = this.getState(addressArray);
          this.setState({
              address: (address) ? address : '',
              area: (area) ? area : '',
              city: (city) ? city : '',
              state: (state) ? state : '',
              markerPosition: {
                  lat: newLat,
                  lng: newLng
              },
              mapPosition: {
                  lat: newLat,
                  lng: newLng
              },
          })
      },
      error => {
          console.error(error);
      }
  );
};

onPlaceSelected = (place) => {
  console.log('plc', place);
  const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      area = this.getArea(addressArray),
      state = this.getState(addressArray),
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();

  console.log('latvalue', latValue)
  console.log('lngValue', lngValue)

  // Set these values in the state.
  this.setState({
      address: (address) ? address : '',
      area: (area) ? area : '',
      city: (city) ? city : '',
      state: (state) ? state : '',
      markerPosition: {
          lat: latValue,
          lng: lngValue
      },
      mapPosition: {
          lat: latValue,
          lng: lngValue
      },
  })
};

  render(){

    const AsyncMap = withScriptjs(
      withGoogleMap(
          props => (
              <GoogleMap
                  defaultZoom={this.state.zoom}
                  defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
              >
                  {/* InfoWindow on top of marker */}

                  {/*Marker*/}
                  <Marker
                      google={this.props.google}
                      name={'Dolores park'}
                      draggable={true}
                      onDragEnd={this.onMarkerDragEnd}
                      position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                  />
                  <InfoWindow
                      onClose={this.onInfoWindowClose}
                      position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                  >
                      <div>
                          <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                      </div>
                  </InfoWindow>
                  <Marker />
                  {/* For Auto complete Search Box */}
                  <InfoWindow
                      onClose={this.onInfoWindowClose}
                      position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                  >
                      <div>
                          <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                      </div>
                  </InfoWindow> 

                  
                  <Marker
                    google={this.props.google}
                    name={'Dolores park'}
                    draggable={true}
                    onDragEnd={this.onMarkerDragEnd}
                    position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                    // position = {{lat: 40.708172, lng: -73.897530}}
                    />
                    <InfoWindow
                      onClose={this.onInfoWindowClose}
                      position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                  >
                      <div>
                          <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                      </div>
                  </InfoWindow>

                    <Marker />

                    <Marker
                     position = {{lat: 40.702091, lng: -73.892448}}
                     />
                    <InfoWindow
                      onClose={this.onInfoWindowClose}
                      position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                  >
                      <div>
                          <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                      </div>
                  </InfoWindow>
                    <Marker />

                    <Marker
                    position = {{lat: 40.703640, lng: -73.897598}}/>
                    <InfoWindow
                      onClose={this.onInfoWindowClose}
                      position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                  >
                      <div>
                          <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                      </div>
                  </InfoWindow>

                    <Marker />

                    <Marker
                     position = {{lat: 40.629893, lng: -74.022797}}/>
                     <InfoWindow
                       onClose={this.onInfoWindowClose}
                       position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                   >
                       <div>
                           <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                       </div>
                   </InfoWindow>
 
                     <Marker />

                    <Marker
                    position = {{lat: 40.661824, lng: -73.950471}}/>
                    <InfoWindow
                      onClose={this.onInfoWindowClose}
                      position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                  >
                      <div>
                          <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                      </div>
                  </InfoWindow>

                    <Marker />

                    <Marker
                     position = {{lat: 40.693499, lng: -73.976285}}/>
                     <InfoWindow
                       onClose={this.onInfoWindowClose}
                       position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                   >
                       <div>
                           <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                       </div>
                   </InfoWindow>
 
                     <Marker />

                    <Marker
                    position = {{lat: 40.763952, lng: -73.960112}}/>
                    <InfoWindow
                      onClose={this.onInfoWindowClose}
                      position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                  >
                      <div>
                          <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                      </div>
                  </InfoWindow>

                    <Marker />

                    <Marker
                     position = {{lat: 40.725683, lng: -73.984001}}/>
                     <InfoWindow
                       onClose={this.onInfoWindowClose}
                       position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                   >
                       <div>
                           <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                       </div>
                   </InfoWindow>
 
                     <Marker />

                    <Marker
                    position = {{lat: 40.866941, lng: -73.884364}}/>
                    <InfoWindow
                      onClose={this.onInfoWindowClose}
                      position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                  >
                      <div>
                          <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                      </div>
                  </InfoWindow>

                    <Marker />

                    <Marker
                     position = {{lat: 40.81877, lng: -73.903788}}/>
                     <InfoWindow
                       onClose={this.onInfoWindowClose}
                       position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                   >
                       <div>
                           <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                       </div>
                   </InfoWindow>
 
                     <Marker />

                    <Marker
                     position = {{lat: 40.615396, lng: -74.103243}}/>
                     <InfoWindow
                       onClose={this.onInfoWindowClose}
                       position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                   >
                       <div>
                           <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                       </div>
                   </InfoWindow>
 
                     <Marker />

                    <Marker
                    position = {{lat: 40.56442, lng: -74.114208}}/>
                    <InfoWindow
                      onClose={this.onInfoWindowClose}
                      position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                  >
                      <div>
                          <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                      </div>
                  </InfoWindow>

                    <Marker />

                    <Marker
                     position = {{lat: 40.537747, lng: -74.150523}}/>
                     <InfoWindow
                       onClose={this.onInfoWindowClose}
                       position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                   >
                       <div>
                           <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                       </div>
                   </InfoWindow>
 
                     <Marker />

                    <Marker
                     position = {{lat: 40.668534 , lng: -73.7392}}/>
                     <InfoWindow
                       onClose={this.onInfoWindowClose}
                       position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                   >
                       <div>
                           <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                       </div>
                   </InfoWindow>
 
                     <Marker />

                    <Marker
                    position = {{lat: 40.729656, lng: -73.780146}}/>
                    <InfoWindow
                      onClose={this.onInfoWindowClose}
                      position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                  >
                      <div>
                          <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                      </div>
                  </InfoWindow>

                    <Marker />
                    
                  <AutoComplete
                      style={{
                          width: '100%',
                          height: '40px',
                          paddingLeft: '16px',
                          marginTop: '2px',
                          marginBottom: '2rem'
                      }}
                      onPlaceSelected={this.onPlaceSelected}
                      types={['(regions)']}
                  />
              </GoogleMap>
    )
      ) 
  );


    return (
<div className style = {{padding: '1rem', margin: '0 auto', maxWidth: 1000, marginLeft: '500px'}}>
  <h1 style = {{textAlign: 'center'}}>WashToGo Locations</h1>
  <Descriptions bordered>
    <Descriptions.Item label="City">{this.state.city}</Descriptions.Item>
     <Descriptions.Item label="Area">{this.state.area}</Descriptions.Item>
     <Descriptions.Item label="State">{this.state.state}</Descriptions.Item>
     <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item>
  </Descriptions>
  
  <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBabJegG-adesPr66yEcc7JhrVa297ZiPs&libraries=places"
                    loadingElement={
                        <div style={{ height: `100%` }} />
                    }
                    containerElement={
                        <div style={{ height: this.state.height }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                />
</div>
    )
  }
}

export default TheMap;

// process.env.REACT_APP_GOOGLE_MAPS_API_KEY