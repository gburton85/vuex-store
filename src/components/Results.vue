<template>
  <div class="results">
    <h1>Results</h1>
    <ul>
      <!-- v-show="selectedFilter === product.Vehicle.Manufacturer" -->
      <li v-for="product in products" :key="product.Vehicle.id">
        <img v-bind:src="product.Vehicle.Url">
        <div>
          <h3>
            {{ product.Vehicle.Manufacturer }}
            {{ product.Vehicle.Model }}
          </h3>
          <h3>
            
            <router-link
              :to="`./Vehicle/${product.Vehicle.id}`"
            >
              <button>Details </button>
            </router-link>
            
          </h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Results',
  data() {
    return {
      products: this.$store.getters.filterProduct(this.params.Manufacturer),
    };
  },
  computed: {
    ...mapState([
      'products'
    ])
  }
};
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
</style>
