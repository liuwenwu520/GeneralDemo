<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div id="sign">@Wenwu</div>
      </el-col>
      <el-col :span="12">
          <el-dropdown class="current-user" trigger="click">
            <span class="el-dropdown-link">
              {{user.nickname}}
            </span>
            <el-dropdown-menu  slot="dropdown">
              <el-dropdown-item @click="logout()">注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    logout () {

    }
  },
  mounted () {
    this.user = this.$store.state.user
  }
}
</script>

<style lang="scss" scoped>
#sign{
  font-size: 22px;
  font-family: '微软雅黑';
  transform: translate(0,50%);
  color: #ffe;
}
.current-user{
  width: 100px;
  margin-left: 100%;
  transform: translate(-100px,20px);
  text-align: right;
  font-size: 18px;
  color: #ffe;
}
</style>
