<template>
  <input
    type="text"
    class="input"
    placeholder="New Post"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.input {
  width: 50%;
  padding: 10px 10px;
}
</style>
