<template>
    <div class="perfil">
      <h1>Perfil de Usuario</h1>
    </div>
  </template>

<script setup lang="ts">
import axios from "axios";
import {ref} from "vue"

let userData = ref({
    avatar:"",
    name: "",
    email: "",
    role: ""
});
axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
  
    }
)
.then(response => {
    userData.value = response.data;
})
.catch(error => {
  console.log(error);
});
</script>