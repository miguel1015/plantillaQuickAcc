import { create } from "zustand";
import { ResponseProducts } from "../../api/types/products/responseProducts";

interface CharacterState {
  products: ResponseProducts[];
  allProducts: (getProducts: ResponseProducts) => void;
}

export const productsStore = create<CharacterState>((set) => ({
  products: [],
  allProducts: (getProducts) =>
    set((state) => ({ products: [...state.products, getProducts] })),
}));
