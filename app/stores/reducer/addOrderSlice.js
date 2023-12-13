"use client";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: [],
    isLoading: false,
    error: null
}

const addOrderSlice = createSlice({
    name: "addOrder",
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(...action.payload)
        },
        deleteOrder: (state, action) => {
            state.orders.splice(action.payload, 1)
        },
        clearOrder: (state) => {
            state.orders = []
        }
    }
})

export const { addOrder, deleteOrder, clearOrder } = addOrderSlice.actions
export default addOrderSlice

