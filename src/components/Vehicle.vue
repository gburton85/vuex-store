<template>
  <div class="Vehicle">
    <h1>Vehicle</h1>
    <pre>store.$state.activeProduct: {{ $store.state.activeProduct }}</pre>

        <!-- {{ activeProduct.Vehicle.Manufacturer }}
        {{ activeProduct.Vehicle.Model }} -->

  </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Vehicle',
  data() {
    return {
        product: this.$store.getters.productById(this.$route.params['id'])
    }
  },
  computed: {
    ...mapState([
      'products',
      'activeProduct'
    ]),
    store() {
      return this.$store.state
    }
  }
}
</script>

<style scoped lang="scss">

</style>
