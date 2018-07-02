<template>
  <div class="home">
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
