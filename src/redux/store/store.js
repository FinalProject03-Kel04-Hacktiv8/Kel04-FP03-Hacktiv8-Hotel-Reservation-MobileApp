import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist"
import listReducer from "../slices/slice-list";
import authReducer from "../slices/auth-slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userReducer from "../slices/user-slice";
import searchReducer from "../slices/slice-search";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
}

const rootReducers = combineReducers({
  list: listReducer,
  auth: authReducer,
  user: userReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers)

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
