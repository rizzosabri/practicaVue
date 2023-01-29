<template>
    <nav :class="{ 'bg-red': color === 'red' }">
      <div class="title">
        <h4>{{ title }}</h4>
      </div>
      <div class="links" v-if="links">
        <button
        v-for="link in links"
        :key="link.label"
        @click="onClick(link)"
        class="btn btn-primary"
      >
        {{ link.label }}
      </button>
      
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Link } from "@/interfaces/link";
import { useStore } from "vuex";
interface NavbarProps {
  title: string;
  links: Link[];
  color?: string;
}
export default defineComponent({
  name: "NavBar",
  emits: ["buttonClicked"],
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array as PropType<Link[]>,
      default(): Link[] {
        return [
        ];
      },
    },
    color: String,
  },
  setup(props: NavbarProps, ctx) {
    const store = useStore();
   
    return {
      onClick: (link: Link) => {
        console.log("onClick", link);
        ctx.emit("buttonClicked", link);
      },
    };
  },
});
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  color: white;
}
h4 {
  color: white;
}
.links,
.title {
  padding: 20px;
}
nav a {
  font-weight: bold;
  color: white;
  padding: 10px;
}
.bg-red {
  background-color: red;
}
.important-link {
  font-size: larger;
}
</style>
