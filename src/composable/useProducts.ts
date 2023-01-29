
import { computed } from "vue";
import { useStore } from "vuex";

const useProducts = () => {
  const store = useStore();

  return {
    // GETTERS
    products: computed(() => store.getters["product/getProducts"]),
    isLoading: computed(() => store.getters["product/getIsLoading"]),
    product: computed(() => store.getters["product/getProduct"]),

    // ACTIONS
    fetchProducts: () => store.dispatch("product/fetchProducts"),
    fetchProductById: (productId: number) =>
      store.dispatch("product/fetchProductById", productId)
  };
};

export default useProducts;