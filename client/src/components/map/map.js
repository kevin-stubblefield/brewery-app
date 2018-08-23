import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css'
import { mapboxToken } from '../../config/tokens.js';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lng: -94.666999,
            lat: 38.549988,
            zoom: 3.37
        };
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        mapboxgl.accessToken = mapboxToken;

        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [lng, lat],
            zoom
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        const style = {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%',
            textAlign: 'left'
        };

        return <div className="map"><div style={style} ref={el => this.mapContainer = el}/></div>;
    }
}

export default Map;