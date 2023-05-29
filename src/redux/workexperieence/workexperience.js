import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWorkExp = createAsyncThunk('getWork/currentUserExp', async () => {
    const BASE_URL = 'http://localhost:4000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.-dk89kbWGoJBfyDGHEBgZx6wCr-R9Yvi1VTF2XfMvCU' }
        // headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.J68gi-mXfQxAe_Bw9JG0CSM_IcNa-fjqr4rIZjH1PSk' }
    })
    const res = await userRequest.get("work_experience")
    // const responseData = res.data;
    delete res.headers;
    return res.data
})

const workExpSlice = createSlice({
    name: 'currentUserWorkExprience',
    initialState: {
        pending: true,
        workExperience: []
    },
    reducers: {},
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
    }
})

export default workExpSlice.reducer;