<template>
  <div class="column col-8 col-mx-auto my-2">
    <div class="card">
      <div class="card-header">
        <div class="card-title h5">
          <p class="text-primary">{{ news.title }}</p>
        </div>
      </div>
      <div class="card-body">
        <p>{{ news.content }}</p>
          <div class="tile-action">
            <button class="btn btn-primary">Tandai Sudah dibaca</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import server from '../api'

export default {
  name: 'Content',
  data () {
    return {
      news: {}
    }
  },
  created () {
    server.get(`/posts/${this.$route.params.id}`)
      .then(({ data }) => {
        console.log('CREATED COMPONENT CONTENT')
        this.news = data
      })

    console.log('data dari store, dipanggil dari Content.vue >>>', this.$store.state.count)
  }
}
</script>

<style>
</style>
