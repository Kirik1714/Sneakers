import { basketReducers } from "./Reducers/basketReducer";

const { createStore } = require("redux");


export const store = createStore(basketReducers)