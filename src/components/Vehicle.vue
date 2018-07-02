<template>
  <div class="vehicleLayout">
		<div class="left">
    	<h1>Vehicle</h1>
   		<pre>{{ activeProduct }}</pre>

        <!-- {{ activeProduct.Vehicle.Manufacturer }}
        {{ activeProduct.Vehicle.Model }} -->
		</div>
		<div class="right">
		</div>

  </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Vehicle',
  data() {
    return {
       
    }
  },
  computed: {
    ...mapState([
      'products',
			'activeProduct',
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
