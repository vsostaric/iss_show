import {REFRESH_METEOR_DATA, REFRESH_METEOR_YEAR_GROUP_DATA} from "../actions";

export const preloadedState = {meteor_year_groups: []};

const meteorReducer = (state, action) => {

    switch (action.type) {
        case REFRESH_METEOR_DATA:
            return {...state, meteor_data: action.meteor_data};
        case REFRESH_METEOR_YEAR_GROUP_DATA:
            return {...state, meteor_year_groups: action.meteor_year_groups};
        default:
            return {...state}
    }

};

export default meteorReducer
