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
      <el-col :offset="1" :span="18">
        <br /><br />

        <!-- INICIO HEADER -->
        <header>
          <el-row class="header">
            <el-row>
              <img class="img-header" src="/icons/dm.svg" />
              <h4 style="color: var(--dm_creme_00)">DataMachina</h4>
            </el-row>
            <el-row style="gap: 10px">
              <el-popover
                placement="bottom"
                style="padding: 0; background: green"
                trigger="click"
                :width="200"
                :background="'red'"
                :style="mateus"
              >
                <template #reference>
                  <img class="icon" src="/icons/produtos.svg" />
                </template>
                <el-col>
                  <el-row class="optionMenu">Logística</el-row>
                  <hr />
                  <el-row class="optionMenu">Chatbot</el-row>
                  <hr />
                  <el-row class="optionMenu">Data Machina</el-row>
                  <hr />
                  <el-row class="optionMenu">Design</el-row>
                </el-col>
              </el-popover>
              <el-popover placement="bottom" trigger="click" :width="400">
                <template #reference>
                  <img class="icon" src="/icons/notificacao.svg" />
                </template>
                <el-col>
                  <el-row class="optionMenu"
                    >O painel Logística foi atualizado - Versão 2.43.2.1</el-row
                  >
                  <hr />
                  <el-row class="optionMenu"
                    >O colaborador Gustavo Emmanoel foi cadastrado</el-row
                  >
                  <hr />
                  <el-row class="optionMenu">Você se cadastrou!</el-row>
                </el-col>
              </el-popover>
              <!-- DÚVIDAS -->
              <el-popover placement="bottom" trigger="click" :width="300">
                <template #reference>
                  <img class="icon" src="/icons/duvida.svg" />
                </template>
                <el-col>
                  <el-row class="optionMenu">Logística</el-row>
                  <hr />
                  <el-row class="optionMenu">Chatbot</el-row>
                  <hr />
                  <el-row class="optionMenu">Data Machina</el-row>
                  <hr />
                  <el-row class="optionMenu"
                    >Dúvidas? entre em contato por:
                    <p class="dm_azul_00_color">
                      datamachina@datamachina.com.br
                    </p></el-row
                  >
                </el-col>
              </el-popover>
              <!-- PERFIL -->
              <el-popover placement="bottom" trigger="click" :width="360">
                <template #reference>
                  <img class="icon" src="/icons/perfil.svg" />
                </template>
                <el-col>
                  <el-row class="optionMenu">
                    <p class="body_01">Mateus Durães</p>
                    <div class="tag-primaria">Administrador</div>
                    mateusduraessantos@datamachina.com.br</el-row
                  >
                  <hr />
                  <el-row class="optionMenu">Configurações</el-row>
                  <el-row class="optionMenu">Configurações</el-row>
                  <hr />
                  <el-row class="optionMenu"
                    ><el-button>Sair</el-button></el-row
                  >
                </el-col>
              </el-popover>
            </el-row>
          </el-row>
          <el-row>
            <el-col :offset="1" :span="22">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="User" name="first">User</el-tab-pane>
                <el-tab-pane label="Config" name="second">Config</el-tab-pane>
                <el-tab-pane label="Role" name="third">Role</el-tab-pane>
                <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
              </el-tabs>
            </el-col>
          </el-row>
        </header>
        <!-- FIM HEADER -->
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
      mateus: "background: red !important; ",
      headerTitle: "Header",

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>

<style>
/* Os estilos do header são definidos no arquivo CSS pai do element Plus, para que os estilos dele funcione em qualquer página em que for chamado */
</style>
