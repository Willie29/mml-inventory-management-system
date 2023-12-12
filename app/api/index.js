import axios from "axios";
import CONFIG from "../config";

const fullURL = (path) => {
  return `${CONFIG.API_URL}/${path}`;
};

export const handleNetworkError = (error) => {
  if (error.message === "Network request failed") {
    alert(
      "Kesalahan Jaringan",
      "Silakan periksa koneksi Anda dan coba kembali.",
      "iconNoInet"
    );
  }
  throw error;
};

const post = (api) => async (data, token) => {
  return await axios.post(fullURL(api), data, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
  });
};

const patch =
  (api) =>
  async (param = "", data) => {
    try {
      return await axios.patch(
        `${fullURL(api)}${param}`,
        data,
        {
          method: "PATCH",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        },
        { handleNetworkError }
      );
    } catch (err) {
      console.log(err);
    }
  };

const get =
  (api) =>
  async (param = "") => {
    try {
      return await axios(
        `${fullURL(api)}?${param}`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        },
        { handleNetworkError }
      );
    } catch (err) {
      console.log(err);
    }
  };

// ============= user ==========
export const register = post("auth/register");
export const login = post("auth/login");
export const getEmployee = get("user");

// ============== items ==========
export const getAllStocks = get("stock");
export const updateOrder = patch("orders/update");
export const getAllOrders = get("orders");

export const postStoks = post("stock");

export const updateStock = patch("stock");
export const postOrder = post("orders/create");

const API = {
  login,
  register,
  // ====
  getAllStocks,
  updateStock,
  getEmployee,
  postOrder,
  getAllOrders,
  postStoks,
  updateOrder,
};

export default API;
