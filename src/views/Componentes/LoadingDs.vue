<template>
  <div>
    <el-row>
      <el-col :span="24">
        <HeaderDs :headerTitle="headerTitle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><AsideComponent :btnAtivo="btnAtivo" /></el-col>
      <el-col :offset="1" :span="15">        
      </el-col>

    </el-row>
  </div>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "LoadingDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Loading",

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>

<style scoped>

</style>