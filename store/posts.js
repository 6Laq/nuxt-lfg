import Vuex from 'vuex'

Vuex.Store({
  modules: {
    posts: {
      namespaced: true,
      state: () => ({
        posts: []
      }),
      mutations: {
        addpost() {
          const trimmedText = this.newPost.trim()
          if (trimmedText) {
            this.$emit('newPost', trimmedText)
            this.newPost = ''
          }
        },
        removePost(idToRemove) {
          this.posts = this.posts.filter((post) => {
            return post.id !== idToRemove
          })
        }
      }
    }
  }
})
