import {REFRESH_ISS_POSITION} from "../actions";

const issReducer = (state, action) => {

    switch (action.type) {
        case REFRESH_ISS_POSITION:
            return {...state};
        default:
            return {...state}
    }

};

export default issReducer
