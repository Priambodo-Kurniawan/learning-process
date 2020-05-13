<template>
  <header class="navbar bg-secondary">
    <section class="navbar-section p-2">
      <router-link to="/dashboard" class="btn btn-link">Hacktiv8News</router-link>
    </section>
    <section class="navbar-center">
      <!-- centered logo or brand -->
    </section>
    <section class="navbar-section px-1" v-if="isLogin">
      <button href="" class="btn btn-link text-error" @click.prevent="logout">Logout</button>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'LandingPage' })
      this.$store.commit('SET_LOGIN', false)
    }
  }
}
</script>

<style>
</style>
