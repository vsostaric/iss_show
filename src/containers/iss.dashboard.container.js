import {connect} from 'react-redux';
import React, {Component} from 'react';
import {fetchIssPositionAction} from "../store/actions";
import IssDashboard from "../components/iss.dashboard";

class IssDashboardContainer extends Component {

    render() {
        return (
            <div>
                <IssDashboard {...this.props} />
            </div>
        );
    }

}

const mapStateToProps = state => ({
    iss_position: {"latitude": state.issReducer.latitude, "longitude": state.issReducer.longitude},
    meteor_data: state.meteorReducer.meteor_data
});

const mapDispatchToProps = dispatch => ({
    refreshIssPosition: () => dispatch(fetchIssPositionAction())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IssDashboardContainer)
