<template>
  <div class="home">
    <div >lista...</div>
    <div v-if="isLoading">Cargando...</div>
    <div class="product-list" v-else>
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @goDetail="goDetail"
      />
    </div>
  </div>
</template>


<script lang="ts">
import useProducts from "@/composable/useProducts";
import { defineComponent } from "vue";
import ProductItem from "@/components/ProductItem.vue";
import { useRouter } from "vue-router";
import { Product } from "@/models/product";

export default defineComponent({
  name: "HomeView",
  components: {
    ProductItem,
  },
  setup() {
    const { products, isLoading, fetchProducts } = useProducts();
    const router = useRouter();
    fetchProducts();
    return {
      products,
      isLoading,
      goDetail: (product: Product) =>
        router.push({ name: "details", params: { id: product.id } }),
    };
    },
  });
</script>

<style scoped>
.product-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
}
</style>