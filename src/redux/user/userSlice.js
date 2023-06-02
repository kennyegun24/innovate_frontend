import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCurrentUserDetails = createAsyncThunk('etDetails/getCurrentUserDetails', async (token) => {
    const BASE_URL = 'http://localhost:4000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${token}` }
    })
    const res = await userRequest.get('user/profile')
    delete res.headers
    return res.data
})

const initialState = {
    currentUser: null,
    isFetching: true,
    userDetails: {},
    pending: false,
    detailsError: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
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
            state.detailsError = true
        },
        dispatchUserDetails: (state, action) => {
            state.userDetails = action.payload
        },
        getUserErrorStatus: (state, action) => {
            state.detailsError = action.payload.error
        },
        resetUserDetails: () => initialState
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
            .addCase(getCurrentUserDetails.rejected, (state, action) => {
                const isFulfilled = state
                isFulfilled.pending = false
                isFulfilled.detailsError = action.error
            })
    }
})

export const { loginStart, loginSuccess, loginFailure, dispatchUserDetails, resetUserDetails, getUserErrorStatus } = userSlice.actions;
export default userSlice.reducer;