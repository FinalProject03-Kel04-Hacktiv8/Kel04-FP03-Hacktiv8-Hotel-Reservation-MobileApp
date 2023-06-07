import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import listReducer from "../slices/slice-list";
import bookReducer from "../slices/slice-book";
import authReducer from "../slices/auth-slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userReducer from "../slices/user-slice";
import searchReducer from "../slices/slice-search";
import favoriteReducer from "../slices/slice-favorite";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducers = combineReducers({
  list: listReducer,
  booked: bookReducer,
  auth: authReducer,
  user: userReducer,
  search: searchReducer,
  favorite: favoriteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
