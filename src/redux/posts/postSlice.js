import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const res = await fetch('http://localhost:4000/api/v1/posts');
    const data = await res.json()
    return data
})

export const getPostsForAuthUser = createAsyncThunk('posts/getPostsForAuthUser', async () => {
    // const res = await fetch('http://localhost:4000/api/v1/all/posts');
    // const data = await res.json()
    // return data

    const BASE_URL = 'http://localhost:4000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.-dk89kbWGoJBfyDGHEBgZx6wCr-R9Yvi1VTF2XfMvCU' }
        // headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.J68gi-mXfQxAe_Bw9JG0CSM_IcNa-fjqr4rIZjH1PSk' }
    })
    const res = await userRequest.get('all/posts')
    delete res.headers
    return res.data
})

export const getPost = createAsyncThunk('posts/getOnePost', async (id) => {
    const res = await fetch(`http://localhost:4000/api/v1/posts/${id}`);
    const data = await res.json()
    // console.log(data)
    return data
})

const getPostsSlice = createSlice({
    name: 'allPosts',
    initialState: {
        pending: true,
        allPosts: [],
        onePost: {}
    },

    reducers: {},
    extraReducers(reducers) {
        reducers
            .addCase(getPosts.pending, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.allPosts = action.payload.data
            })
            .addCase(getPostsForAuthUser.pending, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = true;
            })
            .addCase(getPostsForAuthUser.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.allPosts = action.payload.data
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
    }
})

export default getPostsSlice.reducer