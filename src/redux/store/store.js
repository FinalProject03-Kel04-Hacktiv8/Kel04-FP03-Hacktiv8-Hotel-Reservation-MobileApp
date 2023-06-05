import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import listReducer from "../slices/slice-list";
import bookReducer from "../slices/slice-book";

let rootReducers = combineReducers({
  list: listReducer,
  booked: bookReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
