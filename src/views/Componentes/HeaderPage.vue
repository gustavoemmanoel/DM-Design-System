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
          <br />
          <p>
            É a estrutura padrão de todas as telas da Data Machina. Ele agrega
            configurações e funcionalidades úteis para os usuários ao longo de
            toda a navegação.
          </p>
          <br />
        </div>
        <div class="container-elementos">
          <!-- INICIO HEADER -->
          <div>
            <el-row class="header">
              <el-row>
                <img
                  class="img-header"
                  src="https://raw.githubusercontent.com/gustavoemmanoel/DM-Design-System/a788551ff910a5544891fd15346fe8bdfcc99486/public/icons/dm.svg"
                  alt="dm"
                />
                <h4 style="color: var(--dm_creme_00)">DataMachina</h4>
              </el-row>

              <el-row style="gap: 10px">
                <!-- Produtos -->
                <el-popover
                  placement="bottom"
                  style="padding: 0; background: green"
                  trigger="click"
                  :width="200"
                >
                  <template #reference>
                    <img
                      class="icon"
                      src="https://raw.githubusercontent.com/gustavoemmanoel/DM-Design-System/a788551ff910a5544891fd15346fe8bdfcc99486/public/icons/produtos.svg"
                      alt="produto"
                    />
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

                <!-- Notificações -->
                <el-popover placement="bottom" trigger="click" :width="400">
                  <template #reference>
                    <img
                      class="icon"
                      src="https://raw.githubusercontent.com/gustavoemmanoel/DM-Design-System/a788551ff910a5544891fd15346fe8bdfcc99486/public/icons/notificacao.svg"
                      alt="Notificação"
                    />
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
                    <img
                      class="icon"
                      src="https://raw.githubusercontent.com/gustavoemmanoel/DM-Design-System/a788551ff910a5544891fd15346fe8bdfcc99486/public/icons/duvida.svg"
                      alt="Dúvidas"
                    />
                  </template>
                  <el-col>
                    <el-row class="optionMenu">versão: 2cf2f45f</el-row>
                    <hr />
                    <el-row class="optionMenu"
                      >Dúvidas? entre em contato por:
                      <p class="dm_azul_00_color">
                        datamachina@datamachina.com.br
                      </p>
                    </el-row>
                  </el-col>
                </el-popover>

                <!-- PERFIL -->
                <el-popover placement="bottom" trigger="click" :width="360">
                  <template #reference>
                    <img
                      class="icon"
                      src="https://raw.githubusercontent.com/gustavoemmanoel/DM-Design-System/a788551ff910a5544891fd15346fe8bdfcc99486/public/icons/perfil.svg"
                      alt="Perfil"
                    />
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
                    <el-row class="optionMenu">
                      <el-button>Sair</el-button>
                    </el-row>
                  </el-col>
                </el-popover>
              </el-row>
            </el-row>

            <!-- SUBMENU -->
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
          <h3>Componente</h3>
          <div class="hr" />
          <p></p>
        </div>
        <br />
        <div class="container-elementos">
          <!-- inicio -->

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
                    <img class="icon" src="/icons/whiteicons/produtos.svg" />
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

                <!-- NOTIFICAÇÕES -->

                <el-popover placement="bottom" trigger="click" :width="400">
                  <template #reference>
                    <img class="icon" src="/icons/whiteicons/notificacao.svg" />
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
                    <img
                      class="icon"
                      src="/icons/whiteicons/interrogacao.svg"
                    />
                  </template>
                  <el-col>
                    <el-row class="optionMenu">versão: 2cf2f45f</el-row>
                    <hr />
                    <el-row class="optionMenu">
                      Dúvidas? entre em contato por:
                      <p class="dm_azul_00_color">
                        datamachina@datamachina.com.br
                      </p>
                    </el-row>
                  </el-col>
                </el-popover>

                <!-- PERFIL -->
                <el-popover placement="bottom" trigger="click" :width="360">
                  <template #reference>
                    <img class="icon" src="/icons/whiteicons/perfil.svg" />
                  </template>
                  <el-col>
                    <el-row class="optionMenu">
                      <p class="body_01">Mateus Durães</p>
                      <div class="tag-primaria">Administrador</div>
                      mateusduraessantos@datamachina.com.br
                    </el-row>
                    <hr />
                    <el-row class="optionMenu">Configurações</el-row>
                    <el-row class="optionMenu">Configurações</el-row>
                    <hr />
                    <el-row class="optionMenu">
                      <el-button>Sair</el-button>
                    </el-row>
                  </el-col>
                </el-popover>
                <!-- FIM PERFIL -->
              </el-row>
            </el-row>
          </div>
          <!-- fim -->

          <br />

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="ver" name="3">
              <!-- Código para copiar -->

              <div class="html_codigos_blue">
                <span>&#60;div&#62;</span>
                <br />
                <div recuo>
                  <span>&#60;el-row class=<span roxo>"header"</span>&#62;</span>
                  <div recuo>
                    <span>&#60;el-row&#62;</span>
                    <div class="border-left">
                      <div recuo>
                        <span>
                          &#60;img class=<span roxo>"img-header"</span>
                          src=<span roxo
                            >"https://raw.githubusercontent.com/gustavoemmanoel/DM-Design-System/a788551ff910a5544891fd15346fe8bdfcc99486/public/icons/dm.svg"</span
                          >/&#62; <br /> </span
                        ><span>
                          &#60;h4 style=<span roxo
                            >"color: var(--dm_creme_00)"</span
                          >&#62;</span
                        ><span black>DataMachina</span
                        ><span>&#60;/h4&#62;</span>
                      </div>
                    </div>
                    <span>&#60;/el-row&#62;</span>
                    <br />
                    <br />

                    &#60;el-row style=<span roxo>"gap: 10px"</span>&#62;

                    <div recuo>
                      <!-- PRODUTOS -->
                      <span green>&#60;!-- Produtos --&#62;</span>
                      <br />
                      <span
                        >&#60;el-popover placement=<span roxo>"bottom"</span>
                        style=<span roxo>"padding: 0; background: green"</span>
                        trigger=<span roxo>"click"</span> :width=<span roxo
                          >"200"</span
                        >&#62;</span
                      >
                      <div class="border-left">
                        <div recuo>
                          <span
                            >&#60;template
                            <span roxo>#reference</span>&#62;</span
                          >
                          <br />
                          <div recuo>
                            <span
                              >&#60;img class=<span roxo>"icon"</span> src=<span
                                roxo
                                >"https://raw.githubusercontent.com/gustavoemmanoel/DM-Design-System/a788551ff910a5544891fd15346fe8bdfcc99486/public/icons/produtos.svg"</span
                              >&#62;</span
                            >
                          </div>
                          <span>&#60;/template&#62;</span>
                          <br />
                          <!--  -->
                          <span>&#60;el-col&#62;</span>
                          <br />
                          <div recuo>
                            <span
                              >&#60;el-row class=<span roxo>"optionMenu"</span
                              >&#62;</span
                            ><span black>Logística</span
                            ><span>&#60;/el-row&#62;</span>
                            <br />
                            <span>&#60;hr&#62;</span><br />
                            <span
                              >&#60;el-row class=<span roxo>"optionMenu"</span
                              >&#62;</span
                            ><span black>Chatbot</span
                            ><span>&#60;/el-row&#62;</span>
                            <br />
                            <span>&#60;hr&#62;</span><br />
                            <span
                              >&#60;el-row class=<span roxo>"optionMenu"</span
                              >&#62;</span
                            ><span black>Data Machina</span
                            ><span>&#60;/el-row&#62;</span>
                            <br />
                            <span>&#60;hr&#62;</span><br />
                            <span
                              >&#60;el-row class=<span roxo>"optionMenu"</span
                              >&#62;</span
                            ><span black>Design</span
                            ><span>&#60;/el-row&#62;</span>
                            <br />
                          </div>
                          <span>&#60;/el-col&#62;</span>
                          <!--  -->
                        </div>
                      </div>
                      <span>&#60;/el-popover&#62;</span>
                      <br />
                      <br />

                      <!-- NOTIFICAÇÕES -->
                      <span green>&#60;!-- Notificações --&#62;</span>
                      <br />
                      <span
                        >&#60;el-popover placement=<span roxo>"bottom"</span>
                        trigger=<span roxo>"click"</span> :width=<span roxo
                          >"400"</span
                        >&#62;</span
                      >
                      <br />
                      <div class="border-left">
                        <div recuo>
                          <span
                            >&#60;template
                            <span roxo>#reference</span>&#62;</span
                          >
                          <br />
                          <div recuo>
                            <span
                              >&#60;img class=<span roxo>"icon"</span> src=<span
                                roxo
                                >"https://raw.githubusercontent.com/gustavoemmanoel/DM-Design-System/a788551ff910a5544891fd15346fe8bdfcc99486/public/icons/notificacao.svg"
                              </span>
                              &#62;
                            </span>
                          </div>
                          <span>&#60;/template&#62;</span>
                        </div>
                        <div recuo>
                          <span>&#60;el-col&#62;</span>
                          <br />
                          <div recuo>
                            <span
                              >&#60;el-row class=<span roxo>"optionMenu"</span
                              >&#62;</span
                            >
                            <span black
                              >O painel Logística foi atualizado - Versão
                              2.43.2.1</span
                            >
                            <span>&#60;/el-row&#62;</span>
                            <br />
                            <span>&#60;hr&#62;</span>
                            <br />
                            <span
                              >&#60;el-row class=<span roxo>"optionMenu"</span
                              >&#62;</span
                            >
                            <span black
                              >O colaborador Gustavo Emmanoel foi
                              cadastrado</span
                            >
                            <span>&#60;/el-row&#62;</span>
                            <br />
                            <span>&#60;hr&#62;</span>
                            <br />
                            <span
                              >&#60;el-row class=<span roxo>"optionMenu"</span
                              >&#62;</span
                            >
                            <span black>Você se cadastrou!</span>
                            <span>&#60;/el-row&#62;</span>
                            <br />
                          </div>
                          <span>&#60;/el-col&#62;</span>
                          <br />
                        </div>
                      </div>
                      <span>&#60;/el-popover&#62;</span>
                      <br />
                      <br />

                      <!-- DÚVIDAS -->
                      <span green>&#60;!-- Dúvidas --&#62;</span>
                      <br />
                      <span
                        >&#60;el-popover placement=<span roxo>"bottom"</span>
                        trigger=<span roxo>"click"</span> :width=<span roxo
                          >"300"</span
                        >&#62;</span
                      >
                      <br />
                      <div class="border-left">
                        <div recuo>
                          <span
                            >&#60;template
                            <span roxo>#reference</span>&#62;</span
                          >
                          <br />
                          <div recuo>
                            <span
                              >&#60;img class=<span roxo>"icon"</span> src=<span
                                roxo
                                >"https://raw.githubusercontent.com/gustavoemmanoel/DM-Design-System/a788551ff910a5544891fd15346fe8bdfcc99486/public/icons/duvida.svg"</span
                              >&#62;</span
                            >
                          </div>
                          <span>&#60;/template&#62;</span>
                        </div>
                        <div recuo>
                          <span>&#60;el-col&#62;</span>
                          <br />
                          <div recuo>
                            <span
                              >&#60;el-row class=<span roxo>"optionMenu"</span
                              >&#62;</span
                            >
                            <span black>versão: 2cf2f45f</span>
                            <span>&#60;/el-row&#62;</span>
                            <br />
                            <span>&#60;hr/&#62;</span>
                            <br />
                            &#60;el-row class=<span roxo>"optionMenu"</span
                            >&#62;<span black
                              >Dúvidas? entre em contato por:</span
                            >
                            <br />
                            <div recuo>
                              &#60;p class=<span roxo
                                >"dm_azul_00_color"&#62;</span
                              >
                              <div black>datamachina@datamachina.com.br</div>
                              <span>&#60;/p&#62;</span>
                            </div>
                            <span>&#60;/el-row&#62;</span>
                            <br />
                          </div>
                          <span>&#60;/el-col&#62;</span>
                          <br />
                        </div>
                      </div>
                      <span>&#60;/el-popover&#62;</span>
                      <br />
                      <br />

                      <!-- Perfil -->
                      <span green>&#60;!-- Perfil --&#62;</span>
                      <br />
                      &#60;el-popover placement=<span roxo>"bottom"</span>
                      trigger=<span roxo>"click"</span> :width=<span roxo
                        >"360"</span
                      >&#62;
                      <br />
                      <div class="border-left">
                        <div recuo>
                          &#60;template <span roxo>#reference</span>&#62;
                          <br />
                          <div recuo>
                            &#60;img class=<span roxo>"icon"</span> src=<span
                              roxo
                              >"https://raw.githubusercontent.com/gustavoemmanoel/DM-Design-System/a788551ff910a5544891fd15346fe8bdfcc99486/public/icons/perfil.svg"&#62;</span
                            >
                          </div>
                          &#60;/template&#62;
                          <br />
                          &#60;el-col&#62;
                          <div recuo>
                            &#60;el-row class="<span roxo>tag-primaria"</span
                            >&#62;
                            <br />
                            <div recuo>
                              &#60;p class=<span roxo>"body_01"</span>&#62;<span
                                black
                                >Mateus Durães</span
                              >
                              &#60;/p&#62;<br />
                              &#60;div&#62;<span black>Administrador</span
                              >&#60;/div&#62;<span black>
                                <br />
                                mateusduraessantos@datamachina.com.br</span
                              >
                            </div>
                            &#60;/el-row&#62;
                            <br />
                            &#60;hr&#62;
                            <br />
                            &#60;el-row class=<span roxo>"optionMenu"</span
                            >&#62;<span black>Configurações</span
                            >&#60;/el-row&#62;
                            <br />
                            &#60;el-row class=<span roxo>"optionMenu"</span
                            >&#62;<span black>Configurações</span
                            >&#60;/el-row&#62;
                            <br />
                            &#60;hr&#62;
                            <br />
                            &#60;el-row class=<span roxo>"optionMenu"</span
                            >&#62;
                            <br />
                            <div recuo>
                              &#60;el-button&#62;<span black>Sair</span
                              >&#60;/el-button&#62;
                            </div>
                            &#60;/el-row&#62;
                          </div>
                          &#60;/el-col&#62;
                        </div>
                      </div>
                      <span>&#60;/el-popover&#62;</span>
                    </div>

                    &#60;/el-row&#62;
                  </div>
                  <span>&#60;/el-row&#62;</span>
                  <br />
                </div>
                <span>&#60;/div&#62;</span>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <br />
        <!-- Sub Header -->
        <div>
          <h3>Sub Header</h3>
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

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="ver" name="3">
              <!-- Collapse -->
              <div class="html_codigos_blue">
                &#60;el-row&#62;
                <div recuo>
                  &#60;el-col :offset=<span roxo>"1"</span> :span=<span roxo
                    >"22</span
                  >"&#62;
                  <div recuo>
                    &#60;el-tabs v-model=<span roxo>"activeName"</span>
                    @tab-click=<span roxo>"handleClick"</span>&#62;
                    <div recuo>
                      &#60;el-tab-pane label="<span roxo>User</span>"
                      name="<span roxo>first"</span>&#62;
                      <span black>User</span>
                      &#60;/el-tab-pane&#62;<br />
                      &#60;el-tab-pane label="
                      <span roxo>Config</span>
                      " name="second"&#62;
                      <span black>Config</span>
                      &#60;/el-tab-pane&#62;<br />
                      &#60;el-tab-pane label="
                      <span roxo>Role</span>
                      " name="third"&#62;
                      <span black>Role</span>
                      &#60;/el-tab-pane&#62; <br />
                      &#60;el-tab-pane label="<span roxo>Task</span>" name=<span
                        roxo
                        >"fourth"</span
                      >&#62;
                      <span black>Task</span>
                      &#60;/el-tab-pane&#62;<br />
                    </div>
                    &#60;/el-tabs&#62;
                  </div>
                  &#60;/el-col&#62;
                </div>
                &#60;/el-row&#62;
                <br />
                <!-- Script -->
                &#60;script&#62;
                <div recuo>
                  export default {
                  <div recuo>
                    <div recuo>
                      data() {
                      <br />
                      <div recuo>
                        return {
                        <div recuo>
                          <div recuo>
                            activeName: "first",
                            <br />
                          </div>
                          };
                        </div>
                      </div>
                      },
                      <br />
                      <span>methods: {</span>
                      <div recuo>
                        handleClick(tab, event) {
                        <div recuo>
                          console
                          <span>.log(tab, event);</span>
                        </div>
                        <span>},</span>
                      </div>
                      <span>},</span>
                    </div>
                    <span>};</span>
                  </div>
                </div>
                &#60;/script&#62;
                <!--  -->
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->

        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
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
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--dm_azul_00);
  height: 50px;
  width: 100%;
  padding: 0 16px;
}
.img-header {
  width: 35px;
  margin-right: 60px;
}
.icon {
  width: 25px;
  cursor: pointer;
}
.optionMenu {
  display: flex;
  align-items: center;
  height: 50px;
}

.border-left {
  border-width: 0 0 0 1px;
  border-style: solid;
  border-color: var(--dm_cinza_03);
}
</style>
