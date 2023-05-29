import { configureStore } from '@reduxjs/toolkit'
import getPostsSlice from "./posts/postSlice";
import userSlice from './user/userSlice';
import workExpSlice from './workexperieence/workexperience'

const store = configureStore({
    reducer: {
        user: userSlice,
        allPosts: getPostsSlice,
        workExperience: workExpSlice
    }
})

export default store;