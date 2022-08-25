<template>
  <div>
    <el-row class="background">
      <el-col :span="4"><AsideComponent /></el-col>
  
    </el-row>
  </div>
</template>
<script>
import AsideComponent from "./AsideComponent.vue";

export default {
  name: "BotaoDs",
  components: {
    AsideComponent,
  },
};
</script>

<style scoped>

</style>