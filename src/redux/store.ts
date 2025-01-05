import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import setNewsSlice from "./reducers/setNewsSlice";
import rootSaga from "./sagas";
import errorSlice from "./reducers/ErrorsSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    news: setNewsSlice,
    errors: errorSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
