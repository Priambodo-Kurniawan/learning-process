<template>
  <div class="column col-8 col-mx-auto my-2">
    <div class="card p-2">
      <div class="card-header">
        <div class="card-title h5">
          {{ count }} <router-link :to="`/detail/${post.id}`" class="text-primary">{{ post.title }}</router-link>
        </div>
      </div>
      <div class="card-body">
        <p class="text-ellipsis">{{ post.description }}</p>
      </div>
      <div class="card-footer">
        <div class="columns">
          <div class="column col-8">
            <p class="text-gray">Source: {{ post.source.name }}</p>
          </div>
          <div
            v-if="post.readStatus"
            class="column col-4 text-success"
            style="text-align: right; padding-right: 5px;"
          >
            <i class="icon icon-check"></i> Sudah dibaca
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['post'],
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style>
</style>
