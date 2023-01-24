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
            <h1>/Pins</h1>
            <hr />
            <br />
            <p>Pins são elementos que servem para marcar pontos no mapa.</p>
          </div>
          <br />
          <div class="container-elementos">
            <h2>Pin básico</h2>
            <p>
              O pin básico é utilizado para representar uma informação de um
              ponto específico. Apesar de possuir um elemento ícone, o mesmo
              permace como um pin básico.
            </p>
            <br />
            <el-row>
              <el-col :span="8">
                <img src="imagens_design_system/pins/bom.svg" alt="Bom" />
                <img src="imagens_design_system/pins/media.svg" alt="Media" />
                <img src="imagens_design_system/pins/ruim.svg" alt="Ruim" />
                <img
                  src="imagens_design_system/pins/pinBlueCoroa.svg"
                  alt="Pin"
                />
                <img
                  src="imagens_design_system/pins/pinBlueCoroaBom.svg"
                  alt="Pin"
                />
              </el-col>
              <el-col :span="8">
                <strong>Pin</strong>
                <br />
                <br />
                <div>Borda: <strong>1px</strong></div>
                <div>Cor da borda: <strong>dm_preto_CT01</strong></div>
                <div>Background: <strong>dm_preto_00</strong></div>
                <div>Altura: <strong>44px</strong></div>
                <div>Largura: <strong>36px</strong></div>
              </el-col>
              <el-col :span="8">
                <strong>Ícone</strong>
                <br />
                <br />
                <div>Cor do ícone: <strong>dm_creme_00</strong></div>
                <div></div>
              </el-col>
            </el-row>
            <br />
            <!--  -->
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Consistency" name="1">
                <div>
                  Consistent with real life: in line with the process and logic
                  of real life, and comply with languages and habits that the
                  users are used to;
                </div>
              </el-collapse-item>
            </el-collapse>
            <!--  -->
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
  name: "PinsDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Pins",

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>

<style scoped></style>
