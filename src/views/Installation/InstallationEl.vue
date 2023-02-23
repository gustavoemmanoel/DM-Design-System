<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-col :offset="5" :span="18">
        <br>
        <br>
        <div class="container_title">
          <h1>Instalação Element Plus</h1>
          <hr />
        </div>
        <br>
        <div class="container_title">
          <h2>NPM</h2>
          <hr />
        </div>
        <p>A instalação com o npm é recomendada e funciona perfeitamente com o webpack.</p>
        <p class="box_code">npm i element-ui -S</p>
        <br>
        <br>
        <div class="container_title">
          <h2>Novo codigo</h2>
          <hr />
        </div>
        <p>XXX</p>
      </el-col>
    </el-container>
  </el-container>
</template>
  
<script>
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "InstallationEl",
  components: {
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
  
<style scoped></style>