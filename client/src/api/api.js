import axios from "axios";

export const getBreeds = () => axios.get("/breeds");

export const searchBreeds = (e) => axios.post("/search", e);

export const popularBreeds = () => axios.get("/popularBreeds");