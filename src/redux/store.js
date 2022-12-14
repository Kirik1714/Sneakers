import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Slices/filterSlice";
import basketSlice from "./Slices/basketSlice";

export const store =configureStore({
    reducer:{
        filterSlice,
        basketSlice,

    }
})
