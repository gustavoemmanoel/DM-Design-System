<template>
  <el-row>
    <el-col :span="4" class="cont-inputs">
      <el-input
        placeholder="Please input password"
        v-model="input"
        show-password
      ></el-input>

      <h1>inputs</h1>
      <div class="squad"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "InputsDs",
};
</script>
<style scoped>
</style>