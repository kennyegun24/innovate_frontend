import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://localhost:4000/api/v1'
// Function to fetch posts for thentuicated users
export const getPostsForAuthUser = createAsyncThunk('posts/getPostsForAuthUser', async ({ TOKEN }) => {
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    const res = await userRequest.get('auth/posts')
    delete res.headers
    return res.data
})

// Function to fetch one post for authentuicated users
export const getOnePostForAuthUser = createAsyncThunk('posts/getOnePostsForAuthUser', async ({ id, TOKEN }) => {
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    const res = await userRequest.get(`auth/posts/${id}`)
    delete res.headers
    return res.data
})

const initialState = {
    pending: null,
    currentUserPosts: [],
    allPostsForAuthUser: [],
    onePostForAuthUser: {},
    error: null
}

// Function to create post for authentuicated users
export const makePost = async ({ text, imageUrl, TOKEN }, dispatch) => {
    try {

        const userRequest = axios.create({
            baseURL: BASE_URL,
            headers: { 'Authorization': `Bearer ${TOKEN}` }
        })
        if (imageUrl) {
            await userRequest.post('auth/posts', {
                text: text,
                image: imageUrl
            })
        } else {
            await userRequest.post('auth/posts', {
                text: text,
            })
        }
    } catch (error) {
        delete error.response
        dispatch(getErrorStatus({
            error: {
                message: error.message,
                code: error.code
            }
        }))
    }
}

// CURRENT USER POST
export const getCurrentUserPost = createAsyncThunk('post/currentUserPosts', async ({ TOKEN }) => {
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })

    const res = await userRequest.get('auth/user/posts')
    delete res.headers
    return res.data
})

const getAuthUserPostsSlice = createSlice({
    name: 'allPosts',
    initialState: initialState,

    reducers: {
        getLikedStatus: (state, action) => {
            const isLiked = action.payload.liked;
            const count = action.payload.count
            const id = action.payload.postId
            console.log(action.payload)
            console.log(state.allPostsForAuthUser)
            const post = state.allPostsForAuthUser.find((post) => post.id === id);
            if (post) {
                post.liked = isLiked;
                post.likes_count = count;
            };
            // const userPost = state.allPosts.find((post) => post.id === id);
            // if (userPost) {
            //     userPost.likes_count = count
            // };
        },
        getErrorStatus: (state, action) => {
            state.error = action.payload.error
        },
        resetState: () => initialState
    },
    extraReducers(reducers) {
        reducers
            .addCase(getPostsForAuthUser.pending, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = 'pending and auth user';
            })
            .addCase(getPostsForAuthUser.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.allPostsForAuthUser = action.payload.data
            })
            .addCase(getPostsForAuthUser.rejected, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.allPostsForAuthUser = []
                isFulfilled.error = action.error
            })
            .addCase(getOnePostForAuthUser.pending, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = true;
            })
            .addCase(getOnePostForAuthUser.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.onePostForAuthUser = action.payload.data
            })
            .addCase(getOnePostForAuthUser.rejected, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.onePostForAuthUser = {};
                isFulfilled.error = action.error
            })
            .addCase(getCurrentUserPost.pending, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = true;
            })
            .addCase(getCurrentUserPost.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.currentUserPosts = action.payload.data
            })
            .addCase(getCurrentUserPost.rejected, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.currentUserPosts = [];
                isFulfilled.error = action.error
            })
    }
})
export const { getLikedStatus, getErrorStatus, resetState } = getAuthUserPostsSlice.actions;
export default getAuthUserPostsSlice.reducer
