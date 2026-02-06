import api from "./axiosSetup.js";

export const login = (credentials) => api.post("/user/login", credentials);

export const logout = () => api.post("/user/logout");

export const getAdminUser = () => api.get("/user/admin");
