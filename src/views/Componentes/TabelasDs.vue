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
      <el-col class="sub-nav" :span="5">
        <p>Cores principais da marca</p>
        <p>Tons pretos</p>
        <p>Tons creme</p>
        <p>Cores secundárias da marca</p>
        <p>Sub tons de cores da marca</p>
        <p>Cores de contraste</p>
        <p>Cores semânticas</p>
        <p>Paleta de uso em mapa</p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "TabelasDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Tabelas",

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>

<style scoped>

</style>