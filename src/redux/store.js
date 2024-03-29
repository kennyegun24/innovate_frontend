import { configureStore, createAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session"; // Use session storage
import getUnAuthUserPostsSlice from "./unauth_edux/posts/postSlice";
import userSlice from "./auth_redux/user/userSlice";
import workExpSlice from "./auth_redux/workExperience/workExperience";
import getAuthUserPostsSlice from "./auth_redux/post/post";
import getAuthOtherUserPosts from "./auth_redux/otherUser/otherUser";
import getRecommendedUsers from "./auth_redux/user_recommend/UserRecommend";
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

const persistConfig = {
  key: "root",
  storage,
};
export const resetAction = createAction("reset");

const persistedUserReducer = persistReducer(persistConfig, userSlice);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    authPost: getAuthUserPostsSlice,
    unAuthPost: getUnAuthUserPostsSlice,
    workExperience: workExpSlice,
    otherUserPosts_auth: getAuthOtherUserPosts,
    recommended_users: getRecommendedUsers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
