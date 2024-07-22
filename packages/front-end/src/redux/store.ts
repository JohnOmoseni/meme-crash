import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AppStateReducer from "./features/appSlice";
import ChatReducer from "./features/chatSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const chatStateConfig = {
  key: "chatLog",
  storage: storage,
};

const rootReducer = combineReducers({
  appState: AppStateReducer,
  chat: persistReducer(chatStateConfig, ChatReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
