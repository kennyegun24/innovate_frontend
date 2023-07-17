import { publicRequest } from "../allRequests";
import { getUserErrorStatus, loginFailure, loginStart, loginSuccess } from "./auth_redux/user/userSlice";
import axios from "axios";
import { getWorkErrorStatus } from "./workexperieence/workexperience";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("authenticaation/login", user)
        const responseData = res;
        delete responseData.headers;
        dispatch(loginSuccess(responseData.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const register = async (dispatch, user) => {
    dispatch(loginStart());
    const res = await publicRequest.post("authenticaation", user)
    const responseData = res.data;
    delete responseData.headers;
    dispatch(loginSuccess(responseData))
}

export const updateUserDetails = async (user, token, dispatch) => {
    try {

        const BASE_URL = 'http://localhost:4000/api/v1/auth'
        const userRequest = axios.create({
            baseURL: BASE_URL,
            headers: { 'Authorization': `Bearer ${token}` }
        })
        console.log({ user_detail: user })
        const res = await userRequest.put("user/update_profile", { user_detail: user })
        const responseData = res.data;
        delete responseData.headers;
    } catch (error) {
        dispatch(getUserErrorStatus({
            error: {
                message: error.message,
                code: error.code
            }
        }))
    }
}

export const newWorkExperience = async (work_experience, token, dispatch) => {
    try {

        const BASE_URL = 'http://localhost:4000/api/v1/auth'
        const userRequest = axios.create({
            baseURL: BASE_URL,
            headers: { 'Authorization': `Bearer ${token}` }
        })
        const res = await userRequest.post("user/experience/new", work_experience)
        const responseData = res.data;
        delete responseData.headers;
    }
    catch (error) {
        console.log(error)
        dispatch(getWorkErrorStatus({
            error: {
                message: error.message,
                code: error.code
            }
        }))
    }
}

export const likeUnlikePost = async (id, token) => {
    const BASE_URL = `http://localhost:4000/api/v1/auth/post/${id}`
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${token}` }
    })
    const res = await userRequest.post("like")
    const responseData = res.data;
    delete responseData.headers;
}

export const addComment = async (token, comment) => {
    const BASE_URL = 'http://localhost:4000/api/v1/auth'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': `Bearer ${token}` }
    })
    const res = await userRequest.post("post_comments", comment)
    const responseData = res.data;
    delete responseData.headers;
}
