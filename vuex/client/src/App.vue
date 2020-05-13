<template>
  <div id="app">
    <Navbar />
    <!-- <button @click="increment">Counter</button> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('SET_COUNT', 5)
    }
  }
}
</script>

<style>
</style>
