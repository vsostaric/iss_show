import reducer from "./reducer";
import { createStore } from 'redux';

export const store = createStore(reducer, {
    issReducer: {"latitude": "-4.9413", "longitude": "58.8674"}
});

console.log(store)
console.log(store.getState())
