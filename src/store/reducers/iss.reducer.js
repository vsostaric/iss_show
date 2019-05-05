import {REFRESH_ISS_POSITION} from "../actions";

export const preloadedState = {
    "latitude": "-4.9413", "longitude": "58.8674"
};

const issReducer = (state, action) => {

    switch (action.type) {
        case REFRESH_ISS_POSITION:
            return {...state};
        default:
            return {...state}
    }

};

export default issReducer
