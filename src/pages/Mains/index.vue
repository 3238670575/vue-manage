<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <Navmenu></Navmenu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main> 
        <router-view></router-view> 
      </el-main>
    </el-container>
  </el-container>
</template>

<script> 
import Navmenu from '@/components/Navmenu' 

export default {
  name: "mains", 
  components:{ 
    Navmenu, 
  }
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding: 0px;
}
</style>
