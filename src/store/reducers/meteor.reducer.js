import {REFRESH_METEOR_DATA} from "../actions";

export const preloadedState = {};

const meteorReducer = (state, action) => {

    switch (action.type) {
        case REFRESH_METEOR_DATA:
            return {...state};
        default:
            return {...state}
    }

};

export default meteorReducer
