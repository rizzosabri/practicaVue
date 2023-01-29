import { Product } from '@/models/product';
import { createStore } from 'vuex'
import   productModule from './products'

export interface IState {
  authProduct: Product | null; 
  
}

export default createStore<IState>({
  state: {
    authProduct: null,
  },
  mutations: {
  
  },
  getters: {
 
  },
  actions: {},
  modules: {
    product: productModule
    
  },
});
