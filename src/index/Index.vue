<template>
    <div>
      <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  mounted () {
    console.log('index mounted')
    const url = 'http://localhost:8080/user/login/current-user'
    axios.get(url)
      .then(response => {
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
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
