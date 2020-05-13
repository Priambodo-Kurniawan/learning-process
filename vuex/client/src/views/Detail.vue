<template>
  <div class="container">
    <div class="columns">
      <ul>
        <li><router-link :to="`/detail/${$route.params.id}/image`">Image</router-link></li>
        <li><router-link :to="`/detail/${$route.params.id}/content`">Content</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import server from '../api'

export default {
  name: 'Detail',
  data () {
    return {
      news: {}
    }
  },
  methods: {
    getOneNews () {
      server.get(`/posts/${this.$route.params.id}`)
        .then(({ data }) => {
          this.news = data
        })
        .catch(err => console.log(err))
    }
  },
  created () {
    this.getOneNews()
  }
}
</script>

<style>
</style>
