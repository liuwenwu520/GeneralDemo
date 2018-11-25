<template>
  <div>
    <el-container id="page">
      <el-header id="header">Header</el-header>
      <el-main>
        <el-row class="form-row">
          <el-col :span="11" :offset="13">
            <div id="form">
              <form>
                <div class="form-title">账号密码登录</div>
                <div class="form-username input-group">
                  <el-input class="input" v-model="formJson.username" placeholder="用户名"></el-input>
                </div>
                <div class="input-group">
                  <el-input class="input" v-model="formJson.password" placeholder="密码"></el-input>
                </div>
                <div class="input-group">
                  <el-button type="success" class="input" @click="signIn()">登录</el-button>
                </div>
              </form>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer id="footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/vuex/store'
export default {
  name: 'SignIn',
  data () {
    return {
      formJson: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const url = 'http://localhost:8080/user/login'
      if (this.formJson.username !== '' && this.formJson.password !== '') {
        axios.post(url, this.formJson)
          .then(response => {
            // 请求成功
            if (response.status === 200) {
              let data = response.data
              if (data['status'] === 200) {
                // 登录成功
                this.$router.push('/index')
              } else {
                // 登录失败
                alert(data['statusText'])
              }
            }
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => {

          })
      }
    }
  },
  store: store
}
</script>

<style lang="scss" scoped>
  #page{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("../assets/sign-in-background.jpg") no-repeat;
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
