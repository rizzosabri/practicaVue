import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { IProductState } from "./state";

const mutations: MutationTree< IProductState> = {
  setProducts(state:  IProductState, products: Product[]) {
    state.products = products;
  },
  setIsLoading(state:  IProductState, value: boolean) {
    state.isLoading = value;
  },
 setSelectedProduct(state, product: Product) {
   state.selectedProduct = product;
},
};



export default mutations;