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
    async (name) => {
        try {
            if(name)
                return await axios.get(`${API.API_URL}/orders?name=${name}`)
            return await axios.get(`${API.API_URL}/orders`)
        } catch (e) {
            return e
        }
    }
)

const getOrderDetailByUser = createAsyncThunk(
    'orders/getOrderDetailByUser',
    async (user_id) => {
        try {
            return await axios.get(`${API.API_URL}/orders/detail/user/${user_id}`)
        } catch (e) {
            return e
        }
    }
)

const getOrderByOrderId = createAsyncThunk(
    'orders/getOrderByOrderId',
    async (order_id) => {
        try {
            return await axios.get(`${API.API_URL}/orders/detail/${order_id}`)
        } catch (e) {
            return e
        }
    }
)

const updateOrder = createAsyncThunk(
    'orders/updateOrder',
    async (payload) => {
        try {
            return await axios.put(`${API.API_URL}/orders/${payload.id}`, payload.data)
        } catch (e) {
            return e
        }
    }
)

const confirmOrder = createAsyncThunk(
    'orders/confirmOrder',
    async (payload) => {
        try {
            return await axios.get(`${API.API_URL}/orders/confirm/${payload}`)
        } catch (e) {
            return e
        }
    }
)

export {
    getOrdersByUser,
    getAllOrders,
    getOrderDetailByUser,
    confirmOrder,
    updateOrder,
    getOrderByOrderId
}