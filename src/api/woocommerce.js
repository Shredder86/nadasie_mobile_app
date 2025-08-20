// src/api/woocommerce.js
import axios from "axios";
import cfg from "../config";

const api = axios.create({
  baseURL: cfg.WC_API_URL,
  auth: {
    username: cfg.WC_CONSUMER_KEY,
    password: cfg.WC_CONSUMER_SECRET
  },
  params: { per_page: 20 }
});

// Products
export const getProducts = (params = {}) => api.get("/products", { params });
export const getProduct = (id) => api.get(`/products/${id}`);

// Simple search
export const searchProducts = (query) =>
  api.get("/products", { params: { search: query } });

// (MVP) Create order – placeholder (do rozwinięcia pod Twój checkout flow)
export const createOrder = (payload) => api.post("/orders", payload);

export default api;
