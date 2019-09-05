<template>
  <div class="page">
    <nuxt />
    <Nav class="nav" />
    <div class="page-container">
      <SideMenu class="side-menu" />
      <Posts class="main-area" :posts="posts" />
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
  }
}
</script>

<style>
.page {
  height: 100vh;
}
.page-container {
  display: flex;
  flex-direction: row;
  background-color: #386679;
  overflow: hidden;
  height: 100%;
  width: 1500px;
  min-width: 1232px;
}
.side-menu {
  background-color: lightgray;
  min-width: 15%;
}
.main-area {
  height: 100%;
  width: 80%;
}
</style>
