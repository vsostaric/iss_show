import {REFRESH_CLOSEST_YEAR, REFRESH_ISS_POSITION} from "../actions";

export const preloadedState = {};

const issReducer = (state, action) => {

    switch (action.type) {
        case REFRESH_ISS_POSITION:
            return {...action.position};
        case REFRESH_CLOSEST_YEAR:
            return {...state, closestYear: action.closestYear};
        default:
            return {...state}
    }

};

export default issReducer
