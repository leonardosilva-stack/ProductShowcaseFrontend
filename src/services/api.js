import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getBrands = () => api.get("/brands");
export const getBrandById = (id) => api.get(`/brands/${id}`);

export const getConfig = () => api.get("/configurations");

export const getBanners = () => api.get("/banners");
export const getBannerById = (id) => api.get(`/banners/${id}`);

export const getProducts = () => api.get("/products");
export const getProductById = (id) => api.get(`/products/${id}`);

export default api;
