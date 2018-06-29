<template>
  <div class="results">
    <h1>Results</h1>
    <ul>
      <li v-show="selectedFilter === product.Vehicle.Manufacturer" v-for="product in products" :key="product.Vehicle.id">
        <img v-bind:src="product.Vehicle.Url">
        <div>
          <h3>
            {{ product.Vehicle.Manufacturer }}
            {{ product.Vehicle.Model }}
          </h3>
          <h3>
            
            <router-link
            :to="'./Vehicle/'+product.Vehicle.id"
            @input="setActiveProduct" 
            :value="$store.state.activeProduct"
            ><button>More</button></router-link>
            
          </h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Results',
  data() {
    return {};
  },
  computed: {
    ...mapState([
      'products',
      'activeProduct',
      'selectedFilter'
    ])
  },
  methods: {
     ...mapMutations([
      'setActiveProduct',
      'setSelectedFilter'
    ]),
    setActiveProduct(val) {
      this.$store.commit('setActiveProduct', val)
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
</style>
