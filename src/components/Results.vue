<template>
  <div class="results">
    <h1>Results</h1>
    <ul>
      <li v-for="selected in selected" :key="selected.Vehicle.id">
        <img v-bind:src="selected.Vehicle.Url">
        <div>
          <h3>
            {{ selected.Vehicle.Manufacturer }}
            {{ selected.Vehicle.Model }}
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
  data () {
    return {

    };
  },
  computed: {
    ...mapState([
      'products',
      'selected'
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
