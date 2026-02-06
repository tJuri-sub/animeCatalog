import api from "./axiosSetup.js";

export const addAnime = (data) => api.post("/anime/addAnime", data);

export const updateAnime = (id, data) =>
  api.put("/anime/updateAnime/:id", data);
