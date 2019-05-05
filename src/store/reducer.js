import {combineReducers} from 'redux'
import issReducer from "./reducers/iss.reducer";
import {preloadedState as issReducerPreloadedState} from "./reducers/iss.reducer";
import meteorReducer from "./reducers/meteor.reducer";
import {preloadedState as meteorReducerPreloadedState} from "./reducers/meteor.reducer";

const reducer = combineReducers({
    issReducer, meteorReducer
});

export const reducerPreloadedState = {
    issReducer: issReducerPreloadedState,
    meteorReducer: meteorReducerPreloadedState
};

export default reducer;
