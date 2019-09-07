<template>
  <div>
    <nuxt />
    <div class="postInput">
      <PostInput v-model="newPost" @input="newPost = $event" />
      <button @click="addpost">Submit</button>
    </div>
    <div>
      <ul v-if="posts.length" class="postList">
        <PostListItem v-for="post in posts" :key="post.id" :post="post" />
      </ul>
    </div>
  </div>
</template>

<script>
import PostInput from '../components/PostInput'
import PostListItem from '../components/PostListItem'

export default {
  components: {
    PostInput,
    PostListItem
  },
  props: {
    posts: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      newPost: ''
    }
  },
  methods: {
    addpost() {
      const trimmedText = this.newPost.trim()
      if (trimmedText) {
        this.$emit('newPost', trimmedText)
        this.newPost = ''
      }
      console.log(trimmedText)
      return this.posts.push({ trimmedText })
    },
    removePost(idToRemove) {
      this.posts = this.posts.filter((post) => {
        return post.id !== idToRemove
      })
    }
  }
}
</script>

<style scoped>
.postInput {
  padding: 20px;
}
.postList {
  padding: 20px;
}
</style>
