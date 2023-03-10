<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <div class="cont-sobre">

        <div class="container-sobre">
          <img src="logo.svg">
          <div class="background">
            <p>Status do sistema:</p>
            <p>Em atualização</p>
            <p>Última atualização:</p>
            <p>5 de agosto, 2022 </p>
            <p>Método de contato:</p>
            <p>contato@datamachina.com.br</p>
            <p>Nome da versão:</p>
            <p>@DataDS.v1.0</p>
          </div>
          <h6 style="text-align: center;">
            Designed for Data Machina
            <br>
            by Tribo Design
          </h6>
        </div>
        <p class="detail_02">Copyright © Data Machina 2022. Todos os direitos reservados. | Privacidade | Termos de uso
        </p>
      </div>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";
export default {
  components: {
    HeaderDs,
  },
  name: "SobreDs",
  data() {
    return {
      headerTitle: "Sobre",
    };
  },
};
</script>

<style scoped>
.cont-sobre {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--dm_creme_01);
  width: 100%;
  height: calc(100vh - 75px);

}

img {
  width: 100%;
  height: 100px;
  margin: auto;
}

.detail_02 {
  position: absolute;
  margin: auto;
  bottom: 40px;
  justify-self: flex-end;
}

.background {
  display: grid;
  grid-template-columns: max-content max-content;
  background: var(--dm_creme_02);
  border-radius: 6px;
  gap: 20px;
  width: max-content;
  margin: auto;
  padding: 20px;
}

.container-sobre {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>

