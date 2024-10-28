import { useEffect } from "react";
import { GetProductsApi } from "../../api/queries/products/productsQueries";
import { productsStore } from "../../store/products/productsStore";

export const GetAllProducts = () => {
  const { data, error, isLoading } = GetProductsApi();
  const addCharacter = productsStore((state) => state.allProducts);

  useEffect(() => {
    if (data) {
      data?.forEach(addCharacter);
    }
  }, [data, addCharacter]);

  return { data, error, isLoading };
};
