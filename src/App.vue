<template>
  <nav>   
    <NavBar
    title="Practica Vue + Typescript"
    :color="'blue'"

  />
  <NavBarLinks />
  </nav>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import NavBarLinks from "@/components/NavBarLinks.vue";
import { Link } from "./interfaces/link";
localStorage.token=""

// import DetailView from "./views/DetailView.vue"
export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
    NavBarLinks,
    
    // DetailView
  },
  setup() {
   

    return {
      
    };
  },
});
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
