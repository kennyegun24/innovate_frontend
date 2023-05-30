import { publicRequest } from "../allRequests";
// import { loginStart, loginSuccess } from "./user/user"
import { loginStart, loginSuccess } from "./user/userSlice";
import axios from "axios";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    const res = await publicRequest.post("user/login", user)
    const responseData = res;
    delete responseData.headers;
    dispatch(loginSuccess(responseData.data))
}

export const register = async (dispatch, user) => {
    dispatch(loginStart());
    const res = await publicRequest.post("users", user)
    const responseData = res.data;
    delete responseData.headers;
    dispatch(loginSuccess(responseData))
}

export const updateUserDetails = async (user) => {
    const BASE_URL = 'http://localhost:4000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.-dk89kbWGoJBfyDGHEBgZx6wCr-R9Yvi1VTF2XfMvCU' }
        // headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.J68gi-mXfQxAe_Bw9JG0CSM_IcNa-fjqr4rIZjH1PSk' }
    })
    const res = await userRequest.put("user/update_profile", user)
    const responseData = res.data;
    delete responseData.headers;
}

export const newWorkExperience = async (work_experience) => {
    const BASE_URL = 'http://localhost:4000/api/v1'
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.-dk89kbWGoJBfyDGHEBgZx6wCr-R9Yvi1VTF2XfMvCU' }
        // headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.J68gi-mXfQxAe_Bw9JG0CSM_IcNa-fjqr4rIZjH1PSk' }
    })
    const res = await userRequest.post("work_experience", work_experience)
    const responseData = res.data;
    delete responseData.headers;
}

export const likeUnlikePost = async (id) => {
    const BASE_URL = `http://localhost:4000/api/v1/posts/${id}`
    const userRequest = axios.create({
        baseURL: BASE_URL,
        headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.-dk89kbWGoJBfyDGHEBgZx6wCr-R9Yvi1VTF2XfMvCU' }
        // headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.J68gi-mXfQxAe_Bw9JG0CSM_IcNa-fjqr4rIZjH1PSk' }
    })
    const res = await userRequest.post("likes")
    const responseData = res.data;
    delete responseData.headers;
}