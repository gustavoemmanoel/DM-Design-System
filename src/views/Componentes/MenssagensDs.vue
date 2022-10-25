<template>
 <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-aside>
        <AsideComponent :btnAtivo="btnAtivo" />
      </el-aside>

      <el-main>
        <div class="containerInterno">
          <div>
            <h1>/Tags</h1>
            <div class="hr"></div>
            <p>
              Pins são elementos que servem para marcar pontos no mapa.
            </p>
          </div>
          <br />
          <div class="container-elementos">
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "MenssagensDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Menssagens",

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>

<style scoped>

</style>