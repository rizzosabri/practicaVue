import fakeShopApi from "@/api/fakeShopApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductState } from "./state";

const actions: ActionTree<IProductState, IState> = {
  async fetchProducts({ commit }) {
    commit("setIsLoading", true);
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>(
      "/products"
    );
    commit("setIsLoading", false);
    commit("setProducts", data);
  },

  
  async fetchProductById({ commit }, productId: number) {
    // usamos la mutación para poner isLoading = true
    commit("setIsLoading", true);

    const { data } = await fakeShopApi.get<unknown, AxiosResponse<Product>>(
      `/products/${productId}`
    );
    // usamos la mutación para poner isLoading = false
    commit("setIsLoading", false);
    // usamos la mutación para volcar los datos obtenidos en la variable del state users
    commit("setSelectedProduct", data);
  },
};

export default actions;
