import axios from "axios";

const apiLogin = axios.create({
  baseURL: "https://quickacc-bk.onrender.com/api/security/login",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiLogin;
