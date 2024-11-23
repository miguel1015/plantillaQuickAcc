import axios from "axios";

const apiLogin = axios.create({
  baseURL: "https://quickaccqa.runnaterra.lat/api/security/login",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiLogin;
