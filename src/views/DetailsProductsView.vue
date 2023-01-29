<template>
 <div v-if="!isLoading">
        <h1>Detalle del producto</h1>
        <h5>ID: {{ product.id }}</h5>
        <h3>Nombre: {{ product.title }}</h3>
        <h3>Precio: {{ product.price }}</h3>
        <img :src="product.images" alt="" />
   
    description: string;
    category:    Category;
    images:      string;
  </div>
  <div v-else>Cargando...</div>
</template>

<script lang="ts">
import useProducts from "@/composable/useProducts";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    userRole: String,
  },
  setup(props) {
   const { product, fetchProductById, isLoading } = useProducts();
   let aux = window.location.href.split('/')
    let id:any = aux[aux.length - 1]
  
    fetchProductById(id);
    return {
      product,
      isLoading
    };
  },
});
</script>