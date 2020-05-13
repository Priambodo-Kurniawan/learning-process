<template>
  <div class="container">
    <div class="columns">
      <div v-if="isLoading" style="text-align: center;">Loading...</div>
      <Post v-else v-for="$post in readYetArticle" :key="$post.id" :post="$post" />
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters(['readYetArticle']),
    posts () {
      return this.$store.getters.readYetArticle
    }
  },
  components: {
    Post
  },
  created () {
    if (!localStorage.token) {
      this.$router.push({ name: 'LandingPage' })
      this.$store.commit('SET_LOGIN', false)
    } else {
      this.isLoading = true
      this.$store.commit('SET_LOGIN', true)
      this.$store.dispatch('getAllPosts')
        .finally(_ => {
          setTimeout(_ => {
            this.isLoading = false
          }, 2000)
          console.log('finally!!')
        })
    }
  }
}
</script>

<style>
</style>
