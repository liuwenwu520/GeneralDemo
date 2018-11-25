<template>
  <div>
    <el-container id="page">
      <el-header id="header">
          <manage-header></manage-header>
      </el-header>
      <el-container>
        <el-aside id="aside">
            <left-menu></left-menu>
        </el-aside>
        <el-container>
          <el-main id="main"></el-main>
          <el-footer id="footer"></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftMenu from '@/manage/LeftMenu'
import ManageHeader from '@/manage/Header'
import store from '@/vuex/store'
export default {
  name: 'Manage',
  data () {
    return {
      isLogin: false
    }
  },
  components: {
    'left-menu': LeftMenu,
    'manage-header': ManageHeader
  },
  store: store,
  mounted () {
    this.isLogin = this.$store.state.isLogin
  }
}
</script>

<style lang="scss" scoped>
#page{
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  #header{
    background-color: #3C3F41;
    border: 1px solid #555;
    box-sizing: border-box;
  }
  #aside{
    background-color: #545C64;
  }
  #footer{

  }
}
</style>
