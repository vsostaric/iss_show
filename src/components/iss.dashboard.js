import React, {Component} from 'react';
import PropTypes from 'prop-types'

class IssDashboard extends Component {

    render() {
        return (
            <div>
                {this.props.iss_position.latitude}
                {this.props.iss_position.longitude}
            </div>
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
