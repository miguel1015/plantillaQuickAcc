import axios from "axios";

const apiRick = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiRick;
