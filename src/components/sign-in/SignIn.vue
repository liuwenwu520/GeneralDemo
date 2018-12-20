<template>
  <div>
    <el-container id="page">
      <el-header id="header">Header</el-header>
      <el-main>
        <el-row class="form-row">
          <el-col :span="11" :offset="13">
            <div id="form">
              <el-form v-loading="loading">
                <el-form-item>
                  <div class="form-title">账号密码登录</div>
                </el-form-item>
                <el-form-item class="input-group">
                  <el-input class="input" v-model="formJson.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item class="input-group">
                  <el-input class="input" v-model="formJson.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item class="input-group">
                  <el-button type="success" class="input" @click="signIn()">登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer id="footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      formJson: {
        username: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    signIn () {
      this.loading = true
      if (this.formJson.username !== '' && this.formJson.password !== '') {
        const url = '/login'
        this.axios.post(url, this.formJson)
          .then(response => {
            console.log('请求结果')
            console.log(response)
            // 请求成功
            if (response.status === 200) {
              let data = response.data
              if (data['status'] === 200) {
                console.log(this.axios)
                this.axios.get('/admin').then(response=>{
                  console.log('请求/admin')
                  console.log(response)
                })

                // 登录成功
                let user = data['result']
                this.$store.commit('updateUser', user)
                this.$store.commit('changeLoginStatus', true)
                this.$message.success('登录成功')
                this.$router.push('/index')
              } else {
                // 登录失败
                this.$message.error(data['statusText'])
              }
            }
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => {
          })
      } else {
        this.$message.error('用户名或者密码为空')
      }
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
  #page{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("../../assets/sign-in-background.jpg") no-repeat;
    background-size: 100%;
    #header{
      height: 50px;
    }
    #footer{
      height: 50px;
    }
     #form{
       border: 1px solid #ddd;
       border-radius: 5px;
       background-color: #fff;
       width: 410px;
       height: 250px;
       box-sizing: border-box;
       margin-top: 20%;
       .input{
         width: 70%;
       }
       .form-title{
         margin-top: 10px;
         text-align: center;
         font-size: 19px;
         color: #333;
         /*font-weight: lighter;*/
         font-family: "微软雅黑";
       }
       .input-group{
         text-align: center;
         margin-bottom: 15px;
       }
       .form-username{
         margin-top: 30px;
       }
     }
  }
</style>
