<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div id="sign">@Wenwu</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
#sign{
  font-size: 22px;
  font-family: '微软雅黑';
  transform: translate(0,50%);
  color: #dedede;
}
</style>
