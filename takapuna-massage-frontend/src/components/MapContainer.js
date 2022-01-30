import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "600px",
  height: "600px",
};

const location = { lat: -36.78637, lng: 174.77289 };

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  onInfoClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
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
        onClick={this.onMapClicked}
        initialCenter={location}
        zoom={this.props.zoom}
        style={mapStyles}
        onIdle={this.handleMapIdle}
      >
        {this.state.mapLoaded && (
          <Marker ref={this.onMarkerMounted} onClick={this.onMarkerClick} />
        )}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoClose}
        >
          <div>
            <h6>
              Takapuna Therapeutic Massage <br /> 106 Hurstmere Road, Takapuna
            </h6>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAkvXbkIBGHFX7AHthRQVJSUMYrD2fBkXA",
})(MapContainer);