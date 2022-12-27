import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import filterSlice from "./Slices/filterSlice";
import basketSlice from "./Slices/basketSlice";
import sneakersSlice from "./Slices/sneakersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from "redux-persist";
import storage from 'redux-persist/lib/storage'



const rootReducer =combineReducers({
    filterSlice,
    basketSlice,
    sneakersSlice,

})
const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer=persistReducer(persistConfig,rootReducer) ;

const store =configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persister = persistStore(store)
export default store


