import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/";

const getOrdersByUser = createAsyncThunk(
    'orders/getOrdersByUser',
    async (user_id) => {
        try {
            return await axios.get(`${API.API_URL}/orders/user/${user_id}`)
        } catch (e) {
            return e
        }
    }
)

const getAllOrders = createAsyncThunk(
    'orders/getAllOrders',
    async () => {
        try {
            return await axios.get(`${API.API_URL}/orders`)
        } catch (e) {
            return e
        }
    }
)

export {
    getOrdersByUser,
    getAllOrders
}