<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.$router.push('/index')
  }
}
</script>

<style lang="scss">

</style>
