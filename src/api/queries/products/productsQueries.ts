import { useQuery } from "react-query";
import apiProduct from "../../apiClients/products/productsClient";
import { ResponseProducts } from "../../types/products/responseProducts";

const getProducts = async () => {
  const { data } = await apiProduct.get<ResponseProducts[]>("");
  return data;
};

export const GetProductsApi = () => {
  return useQuery("products", getProducts);
};
