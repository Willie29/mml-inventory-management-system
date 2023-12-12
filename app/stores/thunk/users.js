import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/";

const getAllUser = createAsyncThunk(
    'user/getAllUser',
    async (payload) => {
        try {
            if(payload?.role && payload?.name){
                return await axios.get(`${API.API_URL}/users?role=${payload.role}&name=${payload.name}`)
            }

            if(payload?.role){
                return await axios.get(`${API.API_URL}/users?role=${payload.role}`)
            }

            if(payload?.name){
                return await axios.get(`${API.API_URL}/users?name=${payload.name}`)
            }


            return await axios.get(`${API.API_URL}/users`)
        } catch (e) {
            return e
        }
    }
)

const registerUser = createAsyncThunk(
    'user/registerUser',
    async (payload) => {
        try {
            return await axios.post(`${API.API_URL}/auth/register`, payload)
        } catch (e) {
            return e
        }
    }
)

const loginUser = createAsyncThunk(
    'user/loginUser',
    async (payload) => {
        try {
            return await axios.post(`${API.API_URL}/auth/login`, payload)
        } catch (e) {
            return e
        }
    }
)

export {
    getAllUser,
    registerUser,
    loginUser
}