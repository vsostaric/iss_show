import {combineReducers} from 'redux'
import issReducer from "./reducers/iss.reducer";
import meteorReducer from "./reducers/meteor.reducer";

const reducer = combineReducers({
    issReducer, meteorReducer
});

export default reducer;
