import { Product } from "@/models/product";

export interface IProductState {
    products: Product[];
  isLoading: boolean;
  selectedProduct: Product | null;
}


function state(): IProductState {
  return {
    products: [],
    isLoading: false,
    selectedProduct: null,
  };
}
export default state;
