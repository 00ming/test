<template>
<div class="aaa">
  123456
  <br>
  <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
</div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
    //   console.log(this)
      this.$store.commit( 'increment' )
    },
    decrement() {
      this.$store.commit( 'decrement' )
    }
  }
}
</script>

<style lang="css" scoped>
</style>
