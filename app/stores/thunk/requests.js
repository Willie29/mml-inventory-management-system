import {createAsyncThunk} from "@reduxjs/toolkit";
import API from "../../config";
import axios from "axios";

const getRequestByUser = createAsyncThunk(
    'requests/getRequestByUser',
    async (user_id) => {
        try {
            return await axios.get(`${API.API_URL}/requests/user/${user_id}`)
        } catch (e) {
            return e
        }
    }
)

const getAllRequests = createAsyncThunk(
    'requests/getAllRequests',
    async (payload) => {
        try {
            if(payload?.search){
                return await axios.get(`${API.API_URL}/requests?name=${payload?.search}`)
            }

            if(payload?.user){
                return await axios.get(`${API.API_URL}/requests?user=${payload?.user}`)
            }

            return await axios.get(`${API.API_URL}/requests`)
        } catch (e) {
            return e
        }
    }
)

export {
    getRequestByUser,
    getAllRequests
}