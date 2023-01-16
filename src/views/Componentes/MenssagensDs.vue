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
            <h1>/Menssagens</h1>
            <hr />
            <br>
            <p>
              Mensagens aparecem na tela para comunicar ao usuário informações importantes antes de executar alguma ação, durante a utilização do sistema ou após alguma ação ser executada.
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