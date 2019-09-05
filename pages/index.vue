<template>
  <div class="page">
    <Nav />
    <div class="page-container">
      <SideMenu class="side-menu" />
      <Posts class="main-area" :posts="posts" @newPost="handleNewPost" />
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import SideMenu from '../components/SideMenu'
import Posts from '../layouts/Posts'

export default {
  name: 'Home',
  components: {
    Nav,
    SideMenu,
    Posts
  },
  data() {
    return {
      name: '',
      posts: []
    }
  },
  // computed: {
  //   posts() {
  //     return this.$store.state.posts
  //   }
  // },
  // created() {
  //   this.$store.dispatch('bindTodosRef')
  // },
  methods: {
    handleNewPost(post) {
      this.$store.dispatch('addPost', { post: { message: post } })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.page-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #386679;
  overflow: hidden;
  height: 100%;
  width: 1500px;
  min-width: 1232px;
}
.side-menu {
  background-color: thistle;
  min-width: 15%;
}
.main-area {
  height: 100%;
  width: 80%;
}
</style>
