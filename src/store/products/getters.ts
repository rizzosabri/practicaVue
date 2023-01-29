
import { GetterTree } from "vuex";
import { IState } from "..";
import { IProductState } from "./state";

const getters: GetterTree<IProductState, IState> = {
  getProducts(state) {
    return state.products;
  },
  getIsLoading(state) {
    return state.isLoading;
  },
  getProduct(state) {
    return state.selectedProduct;
  },
};
export default getters;