<template>
 <div v-if="!isLoading">
        <h1>detalle del producto</h1>
    <h3>Nombre: {{ product.title }}</h3>
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
    // let user = ref<User>();
    // fakeShopAPI
    //   .get<unknown, AxiosResponse<User>>(`/users/${props.id}`)
    //   .then((resp) => (user.value = resp.data));
    fetchProductById(id);
    return {
      product,
      isLoading
    };
  },
});
</script>