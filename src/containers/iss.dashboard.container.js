import {connect} from 'react-redux';
import React, {Component} from 'react';
import {refreshIssPositionAction} from "../store/actions";
import IssDashboard from "../components/iss.dashboard";

class IssDashboardContainer extends Component {

    render() {
        return (
            <div>
                <IssDashboard iss_position={this.props.iss_position}/>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    iss_position: {"latitude": "51.2850", "longitude": "161.5840"}
});

const mapDispatchToProps = dispatch => ({
    refreshIssPosition: id => dispatch(refreshIssPositionAction())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IssDashboardContainer)
