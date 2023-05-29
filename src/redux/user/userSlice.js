import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCurrentUserDetails = createAsyncThunk('etDetails/getCurrentUserDetails', async () => {
    const BASE_URL = 'http://localhost:4000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.-dk89kbWGoJBfyDGHEBgZx6wCr-R9Yvi1VTF2XfMvCU' }
        // headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.J68gi-mXfQxAe_Bw9JG0CSM_IcNa-fjqr4rIZjH1PSk' }
    })
    const res = await userRequest.get('user/profile')
    delete res.headers
    return res.data
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: true,
        userDetails: {},
        pending: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    },
    extraReducers(reduce) {
        reduce
            .addCase(getCurrentUserDetails.pending, (state) => {
                const isFulfilled = state
                isFulfilled.pending = true
            })

            .addCase(getCurrentUserDetails.fulfilled, (state, action) => {
                const isFulfilled = state
                isFulfilled.pending = false
                isFulfilled.userDetails = action.payload.data
            })
    }
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;