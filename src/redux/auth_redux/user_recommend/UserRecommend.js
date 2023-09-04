import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1";
export const fetchRecommendedUsers = createAsyncThunk(
  "userRecommend/algo",
  async ({ TOKEN }) => {
    const userRequest = axios.create({
      baseURL: BASE_URL,
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    const res = await userRequest.get("/auth/user_recommendation");
    delete res.headers;
    return res.data;
  }
);

const initialState = {
  pending: null,
  recommendedUsers: [],
  error: null,
};

const getRecommendedUsers = createSlice({
  name: "allPosts",
  initialState: initialState,

  reducers: {},
  extraReducers(reducers) {
    reducers
      .addCase(fetchRecommendedUsers.pending, (state, action) => {
        const isFulfilled = state;
        isFulfilled.pending = "pending and auth user";
      })
      .addCase(fetchRecommendedUsers.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.pending = false;
        // console.log(action.payload);
        isFulfilled.recommendedUsers = action.payload;
      })
      .addCase(fetchRecommendedUsers.rejected, (state, action) => {
        const isFulfilled = state;
        isFulfilled.pending = false;
        isFulfilled.recommendedUsers = [];
        isFulfilled.error = action.error;
      });
  },
});

export default getRecommendedUsers.reducer;
