import React, {Component} from 'react';
import PropTypes from "prop-types"
import "leaflet/dist/leaflet.css"
import "./iss.dashboard.css"
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class IssDashboard extends Component {

    render() {
        const position = [this.props.iss_position.latitude, this.props.iss_position.longitude];
        const zoom = 2;

        return (
            <Map center={position} zoom={zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        );
    }

}

IssDashboard.propTypes = {
    iss_position: PropTypes.shape({
        latitude: PropTypes.string.isRequired,
        longitude: PropTypes.string.isRequired
    })
};

export default IssDashboard
