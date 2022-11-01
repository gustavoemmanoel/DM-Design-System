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
        <div>
          <h1>/Header</h1>
          <div class="hr" />
          <p>
            É a estrutura padrão de todas as telas da Data Machina. Ele agrega
            configurações e funcionalidades úteis para os usuários ao longo de
            toda a navegação.
          </p>
        </div>
        <div class="container-elementos">
          <!-- INICIO HEADER -->
          <div>
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
                      >O painel Logística foi atualizado - Versão
                      2.43.2.1</el-row
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
          </div>

          <!-- FIM HEADER -->
        </div>
        <!-- Header -->
        <div>
          <h2>Componente</h2>
          <div class="hr" />
          <p></p>
        </div>
        <br />
        <div class="container-elementos">
          <div>
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
                      >O painel Logística foi atualizado - Versão
                      2.43.2.1</el-row
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
          </div>
          <br />
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="ver" name="3"> </el-collapse-item>
          </el-collapse>
        </div>
        <br />
        <!-- Sub Header -->
        <div>
          <h2>Sub Header</h2>
          <div class="hr" />
          <p></p>
        </div>
        <br />
        <div class="container-elementos">
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
          <br />

          <!--  -->

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="ver" name="3">
              <!--  -->
              <div class="html-line-height html_codigos_blue">
                <div>&#60;el-row&#62;</div>
                <div class="recuo">
                  <div>&#60;el-col :offset="1" :span="22"&#62;</div>
                  <div class="recuo">
                    <div>
                      &#60;el-tabs v-model="activeName"
                      @tab-click="handleClick"&#62;
                    </div>
                    <div class="recuo">
                      <div>
                        &#60;el-tab-pane label="
                        <div class="html_color_axx">User</div>
                        " name="first"&#62;
                        <div class="html_color_conteudo">User</div>
                        &#60;/el-tab-pane&#62;<br />
                      </div>
                      <div>
                        &#60;el-tab-pane label="
                        <div class="html_color_axx">Config</div>
                        " name="second"&#62;
                        <div class="html_color_conteudo">Config</div>
                        &#60;/el-tab-pane&#62;<br />
                      </div>
                      <div>
                        &#60;el-tab-pane label="
                        <div class="html_color_axx">Role</div>
                        " name="third"&#62;
                        <div class="html_color_conteudo">Role</div>
                        &#60;/el-tab-pane&#62; <br />
                      </div>
                      <div>
                        &#60;el-tab-pane label="
                        <div class="html_color_axx">Task</div>
                        " name="fourth"&#62;
                        <div class="html_color_conteudo">Task</div>
                        &#60;/el-tab-pane&#62;<br />
                      </div>
                    </div>
                    <div>&#60;/el-tabs&#62;</div>
                  </div>
                  <div>&#60;/el-col&#62;</div>
                </div>
                <div>&#60;/el-row&#62;</div>
                <!-- Script -->
                <div>&#60;script&#62;</div>
                <div class="recuo">
                  export default
                  <div class="html_color_conteudo">{</div>
                  <div class="recuo">
                    <div class="recuo">
                      <div class="html_color_conteudo">data() {</div>
                      <br />
                      <div class="recuo">
                        return {
                        <div class="recuo">
                          <div class="recuo">
                            activeName: "first",
                            <br />
                          </div>
                          };
                        </div>
                      </div>
                      },
                      <br />
                      <div class="html_color_conteudo">methods: {</div>
                      <div class="recuo">
                        <div class="html_color_conteudo">
                          handleClick(tab, event) {
                        </div>
                        <div class="recuo">
                          console
                          <div class="html_color_conteudo">
                            .log(tab, event);
                          </div>
                        </div>
                        <div class="html_color_conteudo">},</div>
                      </div>
                      <div class="html_color_conteudo">},</div>
                    </div>
                    <div class="html_color_conteudo">};</div>
                  </div>
                </div>
                <div>&#60;/script&#62;</div>
                <!--  -->
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-main>
    </el-container>
  </el-container>
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
      headerTitle: "Header",
      activeName: "first",
      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>

<style>
/* Os estilos do header são definidos no arquivo CSS pai do element Plus, para que os estilos dele funcione em qualquer página em que for chamado */

</style>
