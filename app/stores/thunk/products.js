import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/";

const getAllProducts = createAsyncThunk(
    'products/getProducts',
    async (payload) => {
        try {
            if(payload?.filter){
                return await axios.get(`${API.API_URL}/products?filter=${payload?.filter}`)
            }

            if(payload?.name){
                return await axios.get(`${API.API_URL}/products?name=${payload?.name}`)
            }

            return await axios.get(`${API.API_URL}/products`)
        } catch (e) {
            return e
        }
    }
)

const getProducyById = createAsyncThunk(
    'products/getProductById',
    async (id) => {
        try {
            return await axios.get(`${API.API_URL}/products/detail/${id}`)
        } catch (e) {
            return e
        }
    }
)

const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async (payload) => {
        try {
            console.log(payload)
            return await axios.put(`${API.API_URL}/products/update/${payload.id}`, payload.data)
        } catch (e) {
            return e
        }
    }
)

export {
    getAllProducts,
    getProducyById,
    updateProduct
}