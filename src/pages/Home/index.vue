<template>
  <el-container style="height:100%">
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default { 
    name:'home'
};
</script>

<style lang="less" scoped> 
 .el-header{ 
     background-color: #333;
 } 
 .el-main{ 
     padding: 0px;
 }
</style>