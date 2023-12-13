import {createAsyncThunk} from "@reduxjs/toolkit";
import API from "../../config";
import axios from "axios";

const updateCart = createAsyncThunk(
    'carts/updateCart',
    async (payload) => {
        try {
            return await axios.put(`${API.API_URL}/carts/${payload.id}`, payload.data)
        } catch (e) {
            return e
        }
    }
)

const createCart = createAsyncThunk(
    'carts/createCart',
    async (payload) => {
        try {
            return await axios.post(`${API.API_URL}/carts/user/${payload.user_id}`, payload.data)
        } catch (e) {
            return e
        }
    }
)

export {
    updateCart,
    createCart
}