'use client';

import { combineReducers } from "redux";
import addOrderSlice from "./addOrderSlice";

export default combineReducers({
  [addOrderSlice.name]: addOrderSlice.reducer,
});
