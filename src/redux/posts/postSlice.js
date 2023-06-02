import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const res = await fetch('http://localhost:4000/api/v1/posts');
    const data = await res.json()
    return data
})

const BASE_URL = 'http://localhost:4000/api/v1'

export const getPostsForAuthUser = createAsyncThunk('posts/getPostsForAuthUser', async ({ TOKEN }) => {
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    const res = await userRequest.get('all/posts')
    delete res.headers
    return res.data
})

export const getPost = createAsyncThunk('posts/getOnePost', async (id) => {
    const res = await fetch(`http://localhost:4000/api/v1/posts/${id}`);
    const data = await res.json()
    return data
})

export const getOnePostForAuthUser = createAsyncThunk('posts/getOnePostsForAuthUser', async ({ id, TOKEN }) => {
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    const res = await userRequest.get(`auth/post/${id}`)
    delete res.headers
    return res.data
})

export const makePost = async ({ text, TOKEN }, dispatch) => {
    try {

        const userRequest = axios.create({
            baseURL: BASE_URL,
            headers: { 'Authorization': `Bearer ${TOKEN}` }
        })
        await userRequest.post('posts', {
            text: text
        })
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

const initialState = {
    pending: null,
    allPosts: [],
    allPostsForAuthUser: [],
    onePost: {},
    error: null
}

const getPostsSlice = createSlice({
    name: 'allPosts',
    initialState: initialState,

    reducers: {
        getLikedStatus: (state, action) => {
            const isLiked = action.payload.liked;
            const count = action.payload.count
            const id = action.payload.postId
            const post = state.allPostsForAuthUser.find((post) => post.id === id);
            if (post) {
                post.liked = isLiked;
                post.likes_count = count;
            }
        },
        getErrorStatus: (state, action) => {
            state.error = action.payload.error
        },
        resetState: () => initialState
    },
    extraReducers(reducers) {
        reducers
            .addCase(getPosts.pending, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = 'pending no auth user';
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.allPosts = action.payload.data
            })
            .addCase(getPosts.rejected, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.allPosts = []
                isFulfilled.error = action.error
            })
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
            .addCase(getPost.pending, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = true;
            })
            .addCase(getPost.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.onePost = action.payload.data
            })
            .addCase(getPost.rejected, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.onePost = {};
                isFulfilled.error = action.error
            })
            .addCase(getOnePostForAuthUser.pending, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = true;
            })
            .addCase(getOnePostForAuthUser.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.onePost = action.payload.data
            })
            .addCase(getOnePostForAuthUser.rejected, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.onePost = {};
                isFulfilled.error = action.error
            })
    }
})

export const { getLikedStatus, getErrorStatus, resetState } = getPostsSlice.actions;
export default getPostsSlice.reducer