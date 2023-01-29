import { Module } from "vuex";
import { IState } from "..";
import { IProductState } from "./state";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const productModule: Module<IProductState, IState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
  };

export default productModule;