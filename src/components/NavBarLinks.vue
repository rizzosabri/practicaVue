<template>
    <nav>
      <ul>
        <li>
            <router-link to="/login">LOGIN</router-link> |
        </li>
        <li>
            <router-link to="/">Lista de productos</router-link> |
        </li>
        <li>
            <router-link :to=" {name: 'details', params: {id:1}} ">Detalles</router-link> |
        </li>
        <li>
            <router-link to="/perfil">Perfil de Usuario</router-link>
        </li>
      </ul>
    </nav>
  </template>
  

  <script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    setup() {
      return {};
    },
  });
  </script>
  
  <style scoped>
  nav {
    min-height: 50px;
    background-color: coral;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }
  li {
    padding: 1rem;
    font-weight: bold;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:visited {
    color: white;
  }
  </style>
  