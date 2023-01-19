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
            <h1>/Legenda</h1>
            <hr />
            <br />
            <p>
              A legenda é um quadro que contém os elementos gráficos presentes
              no mapa, representados através de cores, ícones, hachuras, pontos
              e linhas e suas respectivas descrições..
            </p>
          </div>
          <br />
          <div class="container-elementos">
            <div class="legenda-dm">
              <p class="body_02">legend</p>
              <div class="demo-collapse">
                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item title="Consistency" name="1">
                    <div>
                      Consistent with real life: in line with the process and
                      logic of real life, and comply with languages and habits
                      that the users are used to;
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
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
  name: "LegendaDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Legenda",
    };
  },
};
</script>

<style scoped></style>
