<template>
  <div id="app">
    <nav>
      <div class="left">
        <span class="brand">{{ title  }}</span>
      </div>
      <div class="right">
        <div class="rightAlign">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "home",
  computed: {
  ...mapState([
    "title"
    ])
  }
};
</script>

<style lang="scss">
nav {
  display: grid;
  grid-template-columns: repeat(2, 40% 60%);
  grid-template-rows: 100%;
  grid-template-areas:
    "left right";
}
.left, .right {
  padding: 10px 30px;
}

span.brand {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.2em;
}

</style>
