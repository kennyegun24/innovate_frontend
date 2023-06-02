import { configureStore, createAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage/session'; // Use session storage
import getPostsSlice from './posts/postSlice';
import userSlice from './user/userSlice';
import workExpSlice from './workexperieence/workexperience';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};
export const resetAction = createAction('reset');


const persistedUserReducer = persistReducer(persistConfig, userSlice);

const store = configureStore({
    reducer: {
        user: persistedUserReducer,
        allPosts: getPostsSlice,
        workExperience: workExpSlice,
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