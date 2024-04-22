import { configureStore, combineReducers } from "@reduxjs/toolkit";
import SongSlice from "./Features/SongSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../ReduxSaga/SongSaga";

const SagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  Songs: SongSlice,
  // Add other reducers here if needed in the future
});

export const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      SagaMiddleware
    ),
});

SagaMiddleware.run(rootSaga);

export default Store;
