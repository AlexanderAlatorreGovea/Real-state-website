import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};
 
export class MapContainer extends React.Component {
  render() {
    const style = {
      width: '100%',
      height: '400px'
    }
    return (
      <Map 
        google={this.props.google} zoom={14}
        style={style}
      >
 
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} 
        />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyC_8CuuUmQ5MS6DeBi9kz9aAZnflh2fv3M")
})(MapContainer)

