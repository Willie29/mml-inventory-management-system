import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../config/";

const getAllLocations = createAsyncThunk("locations/getLocations", async () => {
  try {
    return await axios.get(`${API.API_URL}/locations`);
  } catch (e) {
    return e;
  }
});

export { getAllLocations };
