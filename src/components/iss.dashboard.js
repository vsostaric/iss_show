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
            map_latitude: this.props.iss_position.latitude,
            map_longitude: this.props.iss_position.longitude,
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
        const iss_position = [this.props.iss_position.latitude, this.props.iss_position.longitude];
        const map_position = [this.state.map_latitude, this.state.map_longitude];

        return (
            <div>
                <Map center={map_position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={iss_position}>
                        <Popup>
                            ISS Position
                            <br/> latitude: {iss_position[0]}
                            <br/> longitude: {iss_position[1]}
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
                <div>
                    Closest meteor name: {this.props.closestName}
                </div>
            </div>
        );

    }

    renderMeteors() {
        if (this.state.showMeteors) {
            const closestName = this.props.closestName;
            return (
                this.props.meteor_data.filter(data => data && data.geolocation && data.geolocation.coordinates)
                    .map(function (item, i) {
                        return <Marker opacity={item.name === closestName ? "1" : "0.3"} key={i} position={item.geolocation.coordinates}>
                            <Popup>
                                Meteor {item.id}
                                <br/> name: {item.name}
                                <br/> year of impact: {new Date(item.year).getFullYear()}
                            </Popup>
                        </Marker>
                    })
            )
        }
    }

}

IssDashboard.propTypes = {
    iss_position: PropTypes.shape({
        latitude: PropTypes.string.isRequired,
        longitude: PropTypes.string.isRequired
    }),
    closestPosition: PropTypes.array,
    closestName: PropTypes.string,
    meteor_data: PropTypes.arrayOf(PropTypes.shape({
        fall: PropTypes.string,
        geolocation: PropTypes.shape({
            type: PropTypes.string,
            coordinates: PropTypes.arrayOf(PropTypes.number)
        }),
        id: PropTypes.string,
        mass: PropTypes.string,
        name: PropTypes.string,
        nametype: PropTypes.string,
        recclass: PropTypes.string,
        reclat: PropTypes.string,
        reclong: PropTypes.string,
        year: PropTypes.string,
    })),
    refreshIssPosition: PropTypes.func.isRequired
};

export default IssDashboard
