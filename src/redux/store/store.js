import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import listReducer from "../slices/slice-list";
import authSlice from "../slices/auth-slice";

let rootReducers = combineReducers({
  list: listReducer,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
