<template>
  <div class="home">
    <h1>{{ title  }}</h1>
    <Search />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Search from "@/components/Search.vue";

export default {
  name: "home",
  components: {
    Search
  },
  computed: {
  ...mapState([
    "title"
    ])
  }
};
</script>
