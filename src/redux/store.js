import { basketReducers } from "./Reducers/basketReducer";
import { filterReducer } from "./Reducers/filterReducer";
const { createStore, combineReducers } = require("redux");


const rootReducer =combineReducers({
    basket:basketReducers,
    filter:filterReducer,
})

export const store = createStore(rootReducer)