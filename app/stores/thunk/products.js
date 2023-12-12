import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/";

const getAllProducts = createAsyncThunk(
    'products/getProducts',
    async (filter) => {
        try {
            if(filter)
                return await axios.get(`${API.API_URL}/products?filter=${filter}`)
            return await axios.get(`${API.API_URL}/products`)
        } catch (e) {
            return e
        }
    }
)

export {
    getAllProducts
}