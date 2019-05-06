import {connect} from 'react-redux';
import React, {Component} from 'react';
import MeteorData from "../components/meteor.data";
import {fetchMeteorDataAction} from "../store/actions";

class MeteorDataContainer extends Component {

    render() {
        return (
            <div>
                <MeteorData {...this.props} />
            </div>
        );
    }

}

const mapStateToProps = state => ({
    meteor_data: state.meteorReducer.meteor_data,
    meteor_year_groups: state.meteorReducer.meteor_year_groups,
    maxCount: state.meteorReducer.maxCount,
    closestYear: state.issReducer.closestYear
});

const mapDispatchToProps = dispatch => ({
    refreshMeteorData: () => dispatch(fetchMeteorDataAction())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MeteorDataContainer)
