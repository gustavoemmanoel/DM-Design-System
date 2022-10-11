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
    <el-col :offset="5" :span="18">
      <br>
      <br>
      <div class="container_title">
        <h1>Instalação Element Plus</h1>
        <div class="hr" />
      </div>

      <br>
      
      <div class="container_title">
        <h2>NPM</h2>
        <div class="hr" />
      </div>
      <p>A instalação com o npm é recomendada e funciona perfeitamente com o webpack.</p>
      <p class="box_code">npm i element-ui -S</p>

      <br>
      <br>

      <div class="container_title">
        <h2>Novo codigo</h2>
        <div class="hr" />
      </div>
      <p>XXX</p>


    </el-col>

    Apenas um teste
  </div>
</template>
  
<script>
import HeaderDs from "../../components/HeaderDs.vue";
import AsideComponent from "./../ElementsDs/AsideComponent.vue";

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