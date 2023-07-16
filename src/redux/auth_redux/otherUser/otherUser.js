import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://localhost:4000/api/v1'

// other user posts
export const getOtherUserPosts = createAsyncThunk('posts/getOtherUserPosts', async ({ TOKEN, id }) => {
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    const res = await userRequest.get(`auth/user/${id}/posts`)
    delete res.headers
    return res.data
})

export const getOtherUserDetails = createAsyncThunk('posts/getOtherUserDetails', async ({ TOKEN, id }) => {
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    const res = await userRequest.get(`auth/user_details/${id}`)
    delete res.headers
    return res.data
})

const initialState = {
    pending: null,
    otherUserPosts: [],
    otherUserDetails: {},
    error: null
}

const getAuthOtherUserPosts = createSlice({
    name: 'allPosts',
    initialState: initialState,

    reducers: {
        likeOtherUserPost: (state, action) => {
            const isLiked = action.payload.liked;
            const count = action.payload.count
            const id = action.payload.postId
            console.log(action.payload)
            console.log(state.otherUserPosts)
            const post = state.otherUserPosts.find((post) => post.id === id);
            if (post) {
                post.liked = isLiked;
                post.likes_count = count;
            };
        },
        getErrorStatus: (state, action) => {
            state.error = action.payload.error
        },
        resetState: () => initialState
    },
    extraReducers(reducers) {
        reducers
            .addCase(getOtherUserPosts.pending, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = 'Fetching';
            })
            .addCase(getOtherUserPosts.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = 'FULFILLED';
                isFulfilled.otherUserPosts = action.payload.data
            })
            .addCase(getOtherUserPosts.rejected, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = null;
                isFulfilled.otherUserPosts = []
                isFulfilled.error = action.error
            })
            .addCase(getOtherUserDetails.pending, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = 'Fetching';
            })
            .addCase(getOtherUserDetails.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = 'FULFILLED';
                isFulfilled.otherUserDetails = action.payload.data
            })
            .addCase(getOtherUserDetails.rejected, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = null;
                isFulfilled.otherUserDetails = {}
                isFulfilled.error = action.error
            })
    }
})
export const { likeOtherUserPost, getErrorStatus, resetState } = getAuthOtherUserPosts.actions;
export default getAuthOtherUserPosts.reducer
