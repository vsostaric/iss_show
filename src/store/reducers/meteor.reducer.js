import {REFRESH_METEOR_DATA, REFRESH_METEOR_YEAR_GROUP_DATA} from "../actions";

export const preloadedState = {meteor_year_groups: []};

const meteorReducer = (state, action) => {

    switch (action.type) {
        case REFRESH_METEOR_DATA:
            return {...state, meteor_data: action.meteor_data};
        case REFRESH_METEOR_YEAR_GROUP_DATA:

            const counts = action.meteor_year_groups.map(d => Number(d.count));
            let maxCount = -Infinity;
            for (const countIndex in counts) {
                if (counts[countIndex] > maxCount) {
                    maxCount = counts[countIndex]
                }
            }

            return {...state, meteor_year_groups: action.meteor_year_groups, maxCount};
        default:
            return {...state}
    }

};

export default meteorReducer
