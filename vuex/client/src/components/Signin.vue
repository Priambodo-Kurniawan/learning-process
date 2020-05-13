<template>
  <form class="form-group col-3 col-mx-auto" @submit.prevent="signIn">
    <h3 class="text-center">Welcome</h3>
    <div class="divider text-center"></div>
    <label class="form-label" for="signin-email">Username</label>
    <input
      class="form-input"
      type="text"
      id="signin-email"
      placeholder="Username"
      v-model="username"
      autofocus
    />
    <label class="form-label" for="signin-password">Password</label>
    <input
      class="form-input"
      type="password"
      id="signin-password"
      placeholder="Password"
      v-model="password"
    />
    <button class="btn btn-primary mt-2" type="submit">Sign In</button>
  </form>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      password: '',
      username: ''
    }
  },
  methods: {
    signIn () {
      // server.get('/users')
      //   .then(({ data }) => {
      //     // console.log(data)
      //     const token = 'awidihy28hd81d1280dg2d'
      //     localStorage.setItem('token', token)
      //     this.$router.push('dashboard')
      //   }).catch(err => {
      //     console.log(err)
      //   })

      this.$store.dispatch('signIn')
        .then(({ data }) => {
          const token = 'awidihy28hd81d1280dg2d'
          localStorage.setItem('token', token)
          this.$router.push('dashboard')
          this.$store.commit('SET_LOGIN', true)
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
