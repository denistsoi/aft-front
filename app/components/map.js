import React from 'react';
import mapstyles from './map-styles';
import mapboxgl from 'mapbox-gl';

class Map extends React.Component {
  componentDidMount() {
    var map = new mapboxgl.Map({
        container: 'map',
        style: mapstyles
    });
  }

  render() {
    return (
      <div>
        <div id='map'></div>
      </div>
    )
  }
}

export default Map;