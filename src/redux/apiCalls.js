import { publicRequest } from "../allRequests";
import { loginFailure, loginStart, loginSuccess } from "./user/userSlice";
import axios from "axios";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("user/login", user)
        const responseData = res;
        delete responseData.headers;
        dispatch(loginSuccess(responseData.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const register = async (dispatch, user) => {
    dispatch(loginStart());
    const res = await publicRequest.post("users", user)
    const responseData = res.data;
    delete responseData.headers;
    dispatch(loginSuccess(responseData))
}

export const updateUserDetails = async (user, token) => {
    const BASE_URL = 'http://localhost:4000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${token}` }
    })
    const res = await userRequest.put("user/update_profile", user)
    const responseData = res.data;
    delete responseData.headers;
}

export const newWorkExperience = async (work_experience, token) => {
    const BASE_URL = 'http://localhost:4000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${token}` }
    })
    const res = await userRequest.post("work_experience", work_experience)
    const responseData = res.data;
    delete responseData.headers;
}

export const likeUnlikePost = async (id, token) => {
    const BASE_URL = `http://localhost:4000/api/v1/posts/${id}`
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${token}` }
    })
    const res = await userRequest.post("likes")
    const responseData = res.data;
    delete responseData.headers;
}