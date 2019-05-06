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

        this.handleRefreshClick = this.handleRefreshClick.bind(this);
        this.handleAutomaticRefreshClick = this.handleAutomaticRefreshClick.bind(this);
        this.handleShowMeteorsClick = this.handleShowMeteorsClick.bind(this);

        this.state = {
            latitude: this.props.iss_position.latitude,
            longitude: this.props.iss_position.longitude,
            zoom: 2,
            automaticRefresh: false,
            showMeteors: false
        };

        this.props.refreshIssPosition();

        setInterval(() => {
                if (this.state.automaticRefresh) {
                    this.props.refreshIssPosition()
                }
            }, 1000
        );
    }

    handleRefreshClick() {
        this.props.refreshIssPosition();
    }

    handleAutomaticRefreshClick() {
        this.setState({...this.state, automaticRefresh: !this.state.automaticRefresh});
    }

    handleShowMeteorsClick() {
        this.setState({...this.state, showMeteors: !this.state.showMeteors});
    }

    render() {
        if (!this.props.iss_position.latitude || !this.props.iss_position.latitude) {
            return "";
        }

        const position = [this.props.iss_position.latitude, this.props.iss_position.longitude];
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
                            <br/> latitude: {position[0]}
                            <br/> longitude: {position[1]}
                        </Popup>
                    </Marker>
                    {this.renderMeteors()}
                </Map>
                <span className="issDashboardButton">
                        <Button variant="primary" onClick={this.handleRefreshClick}
                                disabled={this.state.automaticRefresh}>
                            Refresh Position
                        </Button>
                </span>
                <span className="issDashboardButton">
                        <Button variant={this.state.automaticRefresh ? "primary" : "secondary"}
                                onClick={this.handleAutomaticRefreshClick}>
                            Automatic refresh
                        </Button>
                    </span>
                <span className="issDashboardButton">
                        <Button variant={this.state.showMeteors ? "primary" : "secondary"}
                                onClick={this.handleShowMeteorsClick}>
                            Show meteors
                        </Button>
                </span>
            </div>
        );

    }

    renderMeteors() {
        if (this.state.showMeteors) {
            return (
                this.props.meteor_data.filter(data => data && data.geolocation && data.geolocation.coordinates)
                    .map(function (item, i) {
                        return <Marker opacity="0.5" key={i} position={item.geolocation.coordinates}></Marker>
                    })
            )
        }
    }
}

IssDashboard.propTypes = {
    iss_position: PropTypes.shape({
        latitude: PropTypes.string,
        longitude: PropTypes.string
    }),
    refreshIssPosition: PropTypes.func.isRequired
};

export default IssDashboard
