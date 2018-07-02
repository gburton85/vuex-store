<template>
  <div class="searchLayout">
    <div class="left">
      <div>
        <h3>Filter</h3>
        <ul>
          <li v-for="product in products" :key="product.Vehicle.id">
              <input
                type="checkbox"
                v-model="selectedBox"
              >
                <label>{{ product.Vehicle.Manufacturer }}</label>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <Results />
    </div>
  </div>
</template>

<script>
import Results from '@/components/Results.vue'
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      filter: ''
    }
  },
  components: {
    Results
  },
  computed: {
    ...mapState([
      'products',
      'selected'
      ]),
    ...mapGetters([
      'filterProduct'
    ]),
    ...mapMutations([
      'selectedProducts'
    ])
  },
  methods: {
    selectedBox() {
        this.filter = this.product.Vehicle.Manufacturer
    }
  }
}

</script>

<style scoped lang="scss">
.searchLayout {
  display: grid;
  grid-template-columns: repeat(2, 40% 60%);
  grid-template-rows: 100%;
  grid-template-areas:
    "left right";
}
.left, .right {
  padding: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  padding: 20px;
  background: white;
  margin-bottom: 8px;
  height: 20px;
}
.right {
  grid-area: right;
  background-color: #E9E9E9;
}
input {
  border: none;
  padding: 20px;
  margin-bottom: 50px;
  outline: none;
}
</style>
