import axios from "axios";

const apiProduct = axios.create({
  baseURL: "https://quickaccqa.runnaterra.lat/api/products",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiProduct;
