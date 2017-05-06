/** module deps */
import mapstyles from './map-styles';
import mapboxgl from 'mapbox-gl';


var map = new mapboxgl.Map({
    container: 'map',
    style: mapstyles
});

