import React, {Component} from 'react';
import PropTypes from "prop-types"
import "leaflet/dist/leaflet.css"
import "./iss.dashboard.css"
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import L from 'leaflet';
import Button from "react-bootstrap/Button";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class IssDashboard extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            latitude: this.props.iss_position.latitude,
            longitude: this.props.iss_position.longitude,
            zoom: 2
        };
    }

    handleClick() {
        this.props.refreshIssPosition();
    }

    render() {
        const position = [this.state.latitude, this.state.longitude];
        const {isLoading} = this.state;

        return (
            <div>
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            ISS Position
                            <br/> latitude: {this.state.latitude}
                            <br/> longitude: {this.state.longitude}
                        </Popup>
                    </Marker>
                </Map>
                <Button variant="primary"
                        onClick={!isLoading ? this.handleClick : null}>{isLoading ? 'Loading…' : 'Refresh Position'}
                </Button>
            </div>
        );
    }

}

IssDashboard.propTypes = {
    iss_position: PropTypes.shape({
        latitude: PropTypes.string.isRequired,
        longitude: PropTypes.string.isRequired
    }),
    refreshIssPosition: PropTypes.func.isRequired
};

export default IssDashboard
