<template>
  <div class="column col-8 col-mx-auto my-2">
    <div class="card">
      <div class="card-header">
        <img :src="imageURL">
      </div>
    </div>
  </div>
</template>

<script>
import server from '../api'

export default {
  name: 'ImageNews',
  data () {
    return {
      imageURL: ''
    }
  },
  created () {
    server.get(`/posts/${this.$route.params.id}`)
      .then(({ data }) => {
        console.log('CREATED COMPONENT IMAGE')
        this.imageURL = data.urlToImage
      })
  }
}
</script>

<style>
</style>
