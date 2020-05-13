<template>
  <div class="container">
    <div class="columns">
      <SignIn />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SignIn from '@/components/Signin.vue'

export default {
  name: 'LandingPage',
  components: {
    SignIn
  },
  created () {
    if (localStorage.token) {
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>
