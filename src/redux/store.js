import { configureStore } from '@reduxjs/toolkit'
import getPostsSlice from "./posts/postSlice";

const store = configureStore({
    reducer: {
        allPosts: getPostsSlice
    }
})

export default store;