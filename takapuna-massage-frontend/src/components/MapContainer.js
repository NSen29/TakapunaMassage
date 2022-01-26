import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '82%',
  
};

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapLoaded: false
    };
    this.handleMapIdle = this.handleMapIdle.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState(prevState => ({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    }));
  };

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMarkerMounted = element => {
      console.log(element.marker)
    this.onMarkerClick(element.props, element.marker, element);
  };

  handleMapIdle = () => {
    this.setState({
      mapLoaded: true
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        initialCenter={{lat: -36.786370, lng: 174.772890}}
        zoom={this.props.zoom}
        onIdle={this.handleMapIdle}
      >
        {this.state.mapLoaded && (
          <Marker ref={this.onMarkerMounted} onClick={this.onMarkerClick} />
        )}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>Takapuna Therapeutic Massage <br/> 106 Hurstmere Road, Takapuna</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyARfyMGwhoYZDJePO-1FmWWzi81tDLEYUg"
})(MapContainer)
