
import { GetterTree } from "vuex";
import { IState } from "..";
import { ILoginState } from "./state";

const getters: GetterTree<ILoginState, IState> = {
  getLogin(state) {
    return state.credenciales;
  },
  getIsLoading(state) {
    return state.isLoading;
  },
};
export default getters;