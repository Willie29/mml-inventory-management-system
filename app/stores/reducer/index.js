'use client';

import { combineReducers } from "redux";
import addCart from "./addCart";
import addOrder from "./addOrder";

export default combineReducers({
  addCart,
  addOrder
});
