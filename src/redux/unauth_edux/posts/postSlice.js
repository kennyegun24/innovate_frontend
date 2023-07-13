import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Function to fetch posts for unauthentuicated users
export const getPostsForUnAuthUser = createAsyncThunk('posts/getPosts', async () => {
  const res = await fetch('http://localhost:4000/api/v1/unauth/posts');
  const data = await res.json()
  return data
})

// Function to fetch one post for unauthentuicated users
export const getOnePostForUnAuthUser = createAsyncThunk('posts/getOnePost', async (id) => {
  const res = await fetch(`http://localhost:4000/api/v1/unauth/posts/${id}`);
  const data = await res.json()
  return data
})

const initialState = {
  pending: null,
  allPostsUnAuthUser: [],
  onePostForUnAuthUser: {},
  error: null
}

const getUnAuthUserPostsSlice = createSlice({
  name: 'allPostsUnAuthUser',
  initialState: initialState,

  reducers: {},
  extraReducers(reducers) {
    reducers
      .addCase(getPostsForUnAuthUser.pending, (state, action) => {
        const isFulfilled = state;
        isFulfilled.pending = 'pending no auth user';
      })
      .addCase(getPostsForUnAuthUser.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.pending = false;
        isFulfilled.allPostsUnAuthUser = action.payload.data
      })
      .addCase(getPostsForUnAuthUser.rejected, (state, action) => {
        const isFulfilled = state;
        isFulfilled.pending = false;
        isFulfilled.allPostsUnAuthUser = []
        isFulfilled.error = action.error
      })
      .addCase(getOnePostForUnAuthUser.pending, (state, action) => {
        const isFulfilled = state;
        isFulfilled.pending = true;
      })
      .addCase(getOnePostForUnAuthUser.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.pending = false;
        isFulfilled.onePostForUnAuthUser = action.payload.data
      })
      .addCase(getOnePostForUnAuthUser.rejected, (state, action) => {
        const isFulfilled = state;
        isFulfilled.pending = false;
        isFulfilled.onePost = {};
        isFulfilled.onePostForUnAuthUser = action.error
      })
  }
})

export default getUnAuthUserPostsSlice.reducer
