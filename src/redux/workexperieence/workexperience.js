import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWorkExp = createAsyncThunk('getWork/currentUserExp', async (token) => {
    const BASE_URL = 'http://localhost:4000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${token}` }
    })
    const res = await userRequest.get("work_experience")
    delete res.headers;
    return res.data
})

const initialState = {
    pending: true,
    workExperience: [],
    workSliceError: null
}

const workExpSlice = createSlice({
    name: 'currentUserWorkExprience',
    initialState: initialState,
    reducers: {
        resetWorkExerience: () => initialState,
        getWorkErrorStatus: (state, action) => {
            state.workSliceError = action.payload.error
        }
    },
    extraReducers(reduce) {
        reduce
            .addCase(getWorkExp.pending, (state) => {
                const isFulfilled = state
                isFulfilled.pending = true
            })
            .addCase(getWorkExp.fulfilled, (state, action) => {
                const isFulfilled = state;
                isFulfilled.pending = false;
                isFulfilled.workExperience = action.payload.data
            })
            .addCase(getWorkExp.rejected, (state, action) => {
                const isFulfilled = state;
                isFulfilled.workExperience = []
                isFulfilled.workSliceError = action.error
            })
    }
})

export const { resetWorkExerience, getWorkErrorStatus } = workExpSlice.actions;
export default workExpSlice.reducer;