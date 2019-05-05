import React, {Component} from 'react';
import PropTypes from "prop-types";

class MeteorData extends Component {

    constructor(props, context) {
        super(props, context);

        this.props.refreshMeteorData();
    }

    render() {
        if (this.props.meteor_data) {
            return "hi"
        }
        return "";
    }

}

MeteorData.propTypes = {
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
    refreshMeteorData: PropTypes.func.isRequired
};

export default MeteorData
