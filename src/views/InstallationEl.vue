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
    </el-row>
    <el-col :offset="5" :span="17">
      <div class="container_title">
        <h1>Instalação Element Plus</h1>
        <div class="hr" />
      </div>

      <p>npm</p>
      <p>npm i element-ui -S</p>

      <div class="container_title">
        <el-row>
          <h3>Design System</h3>
          <p class="body_01"> - Data Machina</p>
        </el-row>
        <div class="hr" />
      </div>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur consequuntur consectetur ullam magni
        eaque sint, iure facere iusto ducimus sunt praesentium vitae. Animi nam a distinctio aperiam et veritatis
        placeat.</p>

    </el-col>

    Apenas um teste
  </div>
</template>
  
<script>
import HeaderDs from "../components/HeaderDs.vue";
import AsideComponent from "./ElementsDs/AsideComponent.vue";

export default {
  name: "InstallationEl",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Instalação",
      btnAtivo: { cores: "text-decoration: underline" },

    }
  },
};
</script>
  
<style scoped>

</style>