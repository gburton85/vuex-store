<template>
  <div class="vehicleLayout">
		<div class="left">    
        <img v-bind:src="product.Vehicle.Url">
            
		</div>
		<div class="right">
      <div class="rightAlign">
        {{ product.Vehicle.Manufacturer }}
        {{ product.Vehicle.Model }}
      </div>
		</div>

  </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex'

export default {
name: 'Vehicle',
  data() {
    return {
      product: this.$store.getters.getProductById(this.$route.params.id),
    }
  },
  computed: {
    ...mapState([
      'products',
    ]),
    store() {
      return this.$store.state
    }
  }
}
</script>

<style scoped lang="scss">
.vehicleLayout {
  display: grid;
  grid-template-columns: repeat(2, 40% 60%);
  grid-template-rows: 100%;
  grid-template-areas:
    "left right";
}
.left, .right {
  padding: 30px;
}
</style>
