<template>
  <div>
    <el-row>
      <el-col :span="4"><AsideComponent :btnAtivo="btnAtivo" /></el-col>
    </el-row>
  </div>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
export default {
  name: "TipografiaDs",
  components: {
    AsideComponent,
  },
  data() {
    return {
      btnAtivo: { tipografia: "text-decoration: underline" },
    };
  },
};
</script>

<style scoped>
</style>