import {REFRESH_ISS_POSITION} from "../actions";

export const preloadedState = {};

const issReducer = (state, action) => {

    switch (action.type) {
        case REFRESH_ISS_POSITION:
            return {...action.position};
        default:
            return {...state}
    }

};

export default issReducer
