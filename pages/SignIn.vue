<template>
  <div class="page-container">
    <nuxt />
    <div class="inner-container"></div>
    <div class="sigin-image"></div>
    <div class="sign-up">
      <h1>Create a new account</h1>
      <input
        v-model="email"
        type="text"
        class="input"
        placeholder="Email"
        required
      />
      <input
        v-model="password"
        type="password"
        class="input"
        placeholder="Password"
        required
      />
      <button class="button">Sign Up!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  height: 100vh;
  width: 1440px;
  min-width: 1232px;
}
.sigin-image {
  background-image: url('../assets/radiowaves.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100%;
  width: 70%;
}
.sign-up {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 30%;
}
.input {
  width: 300px;
  margin-bottom: 15px;
}
.button {
  width: 150px;
}
</style>
