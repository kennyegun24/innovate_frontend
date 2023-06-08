import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const res = await fetch('http://localhost:4000/api/v1/posts');
    const data = await res.json()
    return data
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