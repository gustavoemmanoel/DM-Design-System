<template>
  <div>
    <el-row>
      <el-col :span="24">
        <HeaderDs :headerTitle="headerTitle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <AsideComponent :btnAtivo="btnAtivo" />
      </el-col>
      <el-col class="container" :span="16">
        <header>
          <img class="img-header" src="/logo.svg">

        </header>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "HeaderPage",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Header",

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  padding: 0 10px;
  background: var(--dm_azul_00);
  height: 50px;
  width: 100%;


}

.img-header {
  height: 30px;
}
</style>