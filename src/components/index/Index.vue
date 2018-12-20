<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {}
  },
  mounted () {
    console.log(this.$store.state.isLogin)
    console.log(this.$store.state.user)
    // 通过 vuex判断是否在登录
    // 如何判断已经与服务器断开连接
    if (this.$store.state.isLogin) {
      this.$router.push('/manage')
    } else {
      this.$router.push('/sign-in')
      /* const url = 'user/login/current-user'
      this.axios.get(url)
        .then(response => {
          console.log(response)
          // 请求成功
          if (response.status === 200) {
            let data = response.data
            if (data['status'] === 200) {
              // 获取当前用户成功
              this.$store.state.isLogin = true
              this.$store.state.user = data['result']
              this.$router.push('/manage')
            } else {
              // 获取失败
              this.$router.push('sign-in')
            }
          }
        })
        .catch(err => {
          console.log(err)
        } */
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
