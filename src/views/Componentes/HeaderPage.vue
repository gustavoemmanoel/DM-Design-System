<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <div>
          <h1>/Header</h1>
          <hr />
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
                <img class="img-header" src="imagens_design_system/icons/whiteicons/dm.svg" alt="dm" />
                <h4 style="color: var(--dm_creme_00)">DataMachina</h4>
              </el-row>

              <el-row style="gap: 10px">
                <!-- Produtos -->
                <el-popover placement="bottom" style="padding: 0; background: green" trigger="click" :width="200">
                  <template #reference>
                    <img class="icon" src="imagens_design_system/icons/whiteicons/produtos.svg" alt="produto" />
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
                    <img class="icon" src="imagens_design_system/icons/whiteicons/notificacao.svg" alt="Notificação" />
                  </template>
                  <el-col>
                    <el-row class="optionMenu">O painel Logística foi atualizado - Versão
                      2.43.2.1</el-row>
                    <hr />
                    <el-row class="optionMenu">O colaborador Gustavo Emmanoel foi cadastrado</el-row>
                    <hr />
                    <el-row class="optionMenu">Você se cadastrou!</el-row>
                  </el-col>
                </el-popover>

                <!-- DÚVIDAS -->
                <el-popover placement="bottom" trigger="click" :width="300">
                  <template #reference>
                    <img class="icon" src="imagens_design_system/icons/whiteicons/duvida.svg" alt="Dúvidas" />
                  </template>
                  <el-col>
                    <el-row class="optionMenu">versão: 2cf2f45f</el-row>
                    <hr />
                    <el-row class="optionMenu">Dúvidas? entre em contato por:
                      <p class="dm_azul_00_color">
                        datamachina@datamachina.com.br
                      </p>
                    </el-row>
                  </el-col>
                </el-popover>

                <!-- PERFIL -->
                <el-popover placement="bottom" trigger="click" :width="360">
                  <template #reference>
                    <img class="icon" src="imagens_design_system/icons/whiteicons/perfil.svg" alt="Perfil" />
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
              </el-row>
            </el-row>

            <!-- SUBMENU -->
            <el-row>
              <el-col :offset="1" :span="22">
                <el-tabs v-model="activeName1" @tab-click="handleClick">
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
          <h3>Header Principal</h3>
          <hr />
          <p></p>
        </div>
        <br />
        <div class="container-elementos">
          <!-- inicio -->

          <div>
            <el-row class="header">
              <el-row>
                <img class="img-header" src="imagens_design_system/icons/whiteicons/dm.svg" />
                <h4 style="color: var(--dm_creme_00)">DataMachina</h4>
              </el-row>

              <el-row style="gap: 10px">
                <el-popover placement="bottom" style="padding: 0; background: green" trigger="click" :width="200">
                  <template #reference>
                    <img class="icon" src="imagens_design_system/icons/whiteicons/produtos.svg" />
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
                    <img class="icon" src="imagens_design_system/icons/whiteicons/notificacao.svg" />
                  </template>

                  <el-col>
                    <el-row class="optionMenu">O painel Logística foi atualizado - Versão
                      2.43.2.1</el-row>
                    <hr />
                    <el-row class="optionMenu">O colaborador Gustavo Emmanoel foi cadastrado</el-row>
                    <hr />
                    <el-row class="optionMenu">Você se cadastrou!</el-row>
                  </el-col>
                </el-popover>

                <!-- DÚVIDAS -->
                <el-popover placement="bottom" trigger="click" :width="300">
                  <template #reference>
                    <img class="icon" src="imagens_design_system/icons/whiteicons/interrogacao.svg" />
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
                    <img class="icon" src="imagens_design_system/icons/whiteicons/perfil.svg" />
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
            <el-collapse-item title="ver código" name="3">
              <!-- Código para copiar -->

              <div class="html_codigos_blue">
                &#60;<span tagColor>div</span>&#62;
                <div class="border-left">
                  <div recuo>
                    <span>&#60;<span tagColor>el-row</span> class=<span roxo>"header"</span>&#62;</span>
                    <div class="border-left">
                      <div recuo>
                        <span>&#60;<span tagColor>el-row</span>&#62;</span>
                        <div class="border-left">
                          <div recuo>
                            <span>
                              &#60;<span tagColor>img</span> class=<span roxo>"img-header"</span>
                              src=<span roxo>"imagens_design_system/icons/whiteicons/dm.svg"</span>/&#62;
                              <br /> </span><span>
                              &#60;<span tagColor>h4</span> style=<span roxo>"color:
                                var(--dm_creme_00)"</span>&#62;</span><span black>DataMachina</span><span>&#60;/<span
                                tagColor>h4</span>&#62;</span>
                          </div>
                        </div>
                        <span>&#60;/<span tagColor>el-row</span>&#62;</span>
                        <br />
                        <br />
                        &#60;<span tagColor>el-row</span> style=<span roxo>"gap: 10px"</span>&#62;
                        <div class="border-left">
                          <div recuo>
                            <!-- PRODUTOS -->
                            <span green>&#60;!-- Produtos --&#62;</span>
                            <br />
                            <span>&#60;<span tagColor>el-popover</span>
                              placement=<span roxo>"bottom"</span> style=<span roxo>"padding: 0; background:
                                green"</span>
                              trigger=<span roxo>"click"</span> :width=<span roxo>"200"</span>&#62;</span>
                            <div class="border-left">
                              <div recuo>
                                <span>&#60;<span tagColor>template</span>
                                  <span roxo>#reference</span>&#62;</span>
                                <br />
                                <div recuo>
                                  <span>&#60;img class=<span roxo>"icon"</span>
                                    src=<span
                                      roxo>"imagens_design_system/icons/whiteicons/produtos.svg"</span>&#62;</span>
                                </div>
                                <span>&#60;/<span tagColor>template</span>&#62;</span>
                                <br />
                                <!--  -->
                                <span>&#60;<span tagColor>el-col</span>&#62;</span>
                                <br />
                                <div recuo>
                                  <span>&#60;<span tagColor>el-row</span>
                                    class=<span roxo>"optionMenu"</span>&#62;</span><span
                                    black>Logística</span><span>&#60;/<span tagColor>el-row</span>&#62;</span>
                                  <br />
                                  <span>&#60;<span tagColor>hr</span>&#62;</span><br />
                                  <span>&#60;<span tagColor>el-row</span>
                                    class=<span roxo>"optionMenu"</span>&#62;</span><span
                                    black>Chatbot</span><span>&#60;/<span tagColor>el-row</span>&#62;</span>
                                  <br />
                                  <span>&#60;<span tagColor>hr</span>&#62;</span><br />
                                  <span>&#60;<span tagColor>el-row</span>
                                    class=<span roxo>"optionMenu"</span>&#62;</span><span black>Data
                                    Machina</span><span>&#60;/<span tagColor>el-row</span>&#62;</span>
                                  <br />
                                  <span>&#60;<span tagColor>hr</span>&#62;</span><br />
                                  <span>&#60;<span tagColor>el-row</span>
                                    class=<span roxo>"optionMenu"</span>&#62;</span><span
                                    black>Design</span><span>&#60;/<span tagColor>el-row</span>&#62;</span>
                                  <br />
                                </div>
                                <span>&#60;/<span tagColor>el-col</span>&#62;</span>
                                <!--  -->
                              </div>
                            </div>
                            <span>&#60;/<span tagColor>el-popover</span>&#62;</span>
                            <br />
                            <br />
                            <!-- NOTIFICAÇÕES -->
                            <span green>&#60;!-- Notificações --&#62;</span>
                            <br />
                            <span>&#60;<span tagColor>el-popover</span>
                              placement=<span roxo>"bottom"</span> trigger=<span roxo>"click"</span>
                              :width=<span roxo>"400"</span>&#62;</span>
                            <br />
                            <div class="border-left">
                              <div recuo>
                                <span>&#60;<span tagColor>template</span>
                                  <span roxo>#reference</span>&#62;</span>
                                <br />
                                <div recuo>
                                  <span>&#60;img class=<span roxo>"icon"</span>
                                    src=<span roxo>"imagens_design_system/icons/whiteicons/notificacao.svg"
                                    </span>
                                    &#62;
                                  </span>
                                </div>
                                <span>&#60;/<span tagColor>template</span>&#62;</span>
                              </div>
                              <div recuo>
                                <span>&#60;<span tagColor>el-col</span>&#62;</span>
                                <br />
                                <div recuo>
                                  <span>&#60;<span tagColor>el-row</span>
                                    class=<span roxo>"optionMenu"</span>&#62;</span>
                                  <span black>O painel Logística foi atualizado - Versão
                                    2.43.2.1</span>
                                  <span>&#60;/<span tagColor>el-row</span>&#62;</span>
                                  <br />
                                  <span>&#60;<span tagColor>hr</span>&#62;</span>
                                  <br />
                                  <span>&#60;<span tagColor>el-row</span>
                                    class=<span roxo>"optionMenu"</span>&#62;</span>
                                  <span black>O colaborador Gustavo Emmanoel foi
                                    cadastrado</span>
                                  <span>&#60;/<span tagColor>el-row</span>&#62;</span>
                                  <br />
                                  <span>&#60;<span tagColor>hr</span>&#62;</span>
                                  <br />
                                  <span>&#60;<span tagColor>el-row</span>
                                    class=<span roxo>"optionMenu"</span>&#62;</span>
                                  <span black>Você se cadastrou!</span>
                                  <span>&#60;/<span tagColor>el-row</span>&#62;</span>
                                  <br />
                                </div>
                                <span>&#60;/<span tagColor>el-col</span>&#62;</span>
                                <br />
                              </div>
                            </div>
                            <span>&#60;/<span tagColor>el-popover</span>&#62;</span>
                            <br />
                            <br />
                            <!-- DÚVIDAS -->
                            <span green>&#60;!-- Dúvidas --&#62;</span>
                            <br />
                            <span>&#60;<span tagColor>el-popover</span>
                              placement=<span roxo>"bottom"</span> trigger=<span roxo>"click"</span>
                              :width=<span roxo>"300"</span>&#62;</span>
                            <br />
                            <div class="border-left">
                              <div recuo>
                                <span>&#60;template
                                  <span roxo>#reference</span>&#62;</span>
                                <br />
                                <div recuo>
                                  <span>&#60;img class=<span roxo>"icon"</span>
                                    src=<span roxo>"imagens_design_system/icons/whiteicons/duvida.svg"</span>&#62;</span>
                                </div>
                                <span>&#60;/<span tagColor>template</span>&#62;</span>
                              </div>
                              <div recuo>
                                <span>&#60;<span tagColor>el-col</span>&#62;</span>
                                <br />
                                <div recuo>
                                  <span>&#60;<span tagColor>el-row</span>
                                    class=<span roxo>"optionMenu"</span>&#62;</span>
                                  <span black>versão: 2cf2f45f</span>
                                  <span>&#60;/<span tagColor>el-row</span>&#62;</span>
                                  <br />
                                  <span>&#60;hr/&#62;</span>
                                  <br />
                                  &#60;<span tagColor>el-row</span> class=<span roxo>"optionMenu"</span>&#62;<span
                                    black>Dúvidas? entre em contato por:</span>
                                  <br />
                                  <div recuo>
                                    &#60;p class=<span roxo>"dm_azul_00_color"&#62;</span>
                                    <div black>
                                      datamachina@datamachina.com.br
                                    </div>
                                    <span>&#60;/p&#62;</span>
                                  </div>
                                  <span>&#60;/<span tagColor>el-row</span>&#62;</span>
                                  <br />
                                </div>
                                <span>&#60;/<span tagColor>el-col</span>&#62;</span>
                                <br />
                              </div>
                            </div>
                            <span>&#60;/<span tagColor>el-popover</span>&#62;</span>
                            <br />
                            <br />
                            <!-- Perfil -->
                            <span green>&#60;!-- Perfil --&#62;</span>
                            <br />
                            &#60;<span tagColor>el-popover</span>
                            placement=<span roxo>"bottom"</span> trigger=<span roxo>"click"</span>
                            :width=<span roxo>"360"</span>&#62;
                            <br />
                            <div class="border-left">
                              <div recuo>
                                &#60;template <span roxo>#reference</span>&#62;
                                <br />
                                <div recuo>
                                  &#60;<span tagColor>img</span> class=<span roxo>"icon"</span>
                                  src=<span roxo>"imagens_design_system/icons/whiteicons/perfil.svg"&#62;</span>
                                </div>
                                &#60;/<span tagColor>template</span>&#62;
                                <br />
                                &#60;<span tagColor>el-col</span>&#62;
                                <div recuo>
                                  &#60;<span tagColor>el-row</span> class="<span roxo>tag-primaria"</span>&#62;
                                  <br />
                                  <div recuo>
                                    &#60;p class=<span roxo>"body_01"</span>&#62;<span black>Mateus Durães</span>
                                    &#60;/p&#62;<br />
                                    &#60;<span tagColor>div</span>&#62;<span black>Administrador</span>&#60;/<span
                                      tagColor>div</span>&#62;<span black>
                                      <br />
                                      mateusduraessantos@datamachina.com.br</span>
                                  </div>
                                  &#60;/<span tagColor>el-row</span>&#62;
                                  <br />
                                  &#60;<span tagColor>hr</span>&#62;
                                  <br />
                                  &#60;<span tagColor>el-row</span> class=<span roxo>"optionMenu"</span>&#62;<span
                                    black>Configurações</span>&#60;/<span tagColor>el-row</span>&#62;
                                  <br />
                                  &#60;<span tagColor>el-row</span> class=<span roxo>"optionMenu"</span>&#62;<span
                                    black>Configurações</span>&#60;/<span tagColor>el-row</span>&#62;
                                  <br />
                                  &#60;<span tagColor>hr</span>&#62;
                                  <br />
                                  &#60;<span tagColor>el-row</span> class=<span roxo>"optionMenu"</span>&#62;
                                  <br />
                                  <div recuo>
                                    &#60;<span tagColor>el-button</span>&#62;<span black>Sair</span>&#60;/<span
                                      tagColor>el-button</span>&#62;
                                  </div>
                                  &#60;/<span tagColor>el-row</span>&#62;
                                </div>
                                &#60;/<span tagColor>el-col</span>&#62;
                              </div>
                            </div>
                            <span>&#60;/<span tagColor>el-popover</span>&#62;</span>
                          </div>
                        </div>
                        &#60;/<span tagColor>el-row</span>&#62;
                      </div>
                    </div>
                    <span>&#60;/<span tagColor>el-row</span>&#62;</span>
                    <br />
                  </div>
                </div>
                <span>&#60;/<span tagColor>div</span>&#62;</span>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <br />
        <!-- Sub Header -->
        <div>
          <h3>Sub Header</h3>
          <hr />
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

          <!-- Collapse -->
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="ver código"> </el-collapse-item>
          </el-collapse>
          <div class="html_codigos_blue">

            &#60;<span tagColor>template</span>&#62;
            <div class="border-left">
              <div recuo>
                &#60;<span tagColor>el-row</span>&#62;
                <div class="border-left">
                  <div recuo>
                    &#60;<span tagColor>el-col</span> :offset=<span roxo>"1"</span>
                    :span=<span roxo>"22</span>"&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>el-tabs</span> v-model=<span roxo>"activeName"</span>
                        @tab-click=<span roxo>"handleClick"</span>&#62;
                        <div class="border-left">
                          <div recuo>
                            &#60;<span tagColor>el-tab-pane</span> label="<span roxo>User</span>" name="<span
                              roxo>first"</span>&#62;
                            <span black>User</span>
                            &#60;/<span tagColor>el-tab-pane</span>&#62;<br />
                            &#60;<span tagColor>el-tab-pane</span> label="
                            <span roxo>Config</span>
                            " name="second"&#62;
                            <span black>Config</span>
                            &#60;/<span tagColor>el-tab-pane</span>&#62;<br />
                            &#60;<span tagColor>el-tab-pane</span> label="
                            <span roxo>Role</span>
                            " name="third"&#62;
                            <span black>Role</span>
                            &#60;/<span tagColor>el-tab-pane</span>&#62; <br />
                            &#60;<span tagColor>el-tab-pane</span> label="<span roxo>Task</span>" name=<span
                              roxo>"fourth"</span>&#62;
                            <span black>Task</span>
                            &#60;/<span tagColor>el-tab-pane</span>&#62;<br />
                          </div>
                        </div>
                        &#60;/<span tagColor>el-tabs</span>&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>el-col</span>&#62;
                  </div>
                </div>
                &#60;/<span tagColor>el-row</span>&#62;
              </div>
            </div>
            &#60;<span tagColor>template</span> /&#62;
            <br />
            <br />
            <!-- Script -->
            &#60;<span tagColor>script</span>&#62;
            <br />
            <span roxo>export default</span> {
            <div class="border-left">
              <div recuo>
                data() {
                <br />
                <div class="border-left">
                  <div recuo>
                    <span roxo>return</span> {
                    <div class="border-left">
                      <div recuo>
                        activeName: <span black>"first"</span>,
                        <br />
                      </div>
                    </div>
                    };
                  </div>
                </div>
                },
                <br />
                <span>methods: {</span>
                <div class="border-left">
                  <div recuo>
                    handleClick(<span blue>tab, event</span>) {
                    <div class="border-left">
                      <div recuo>
                        console<span>.log(<span blue>tab, event</span>);</span>
                      </div>
                    </div>
                    <span>},</span>
                  </div>
                </div>
                <span>},</span>
              </div>
            </div>
            <span>};</span>
            <br>
            &#60;/<span tagColor>script</span>&#62;
            <!--  -->
          </div>

        </div>

        <div>
          <h3>Produtos</h3>
          <hr />
          <br />
          <p>
            Aqui os produtos da Data Machina serão listados. Se o usuário
            possuir mais de um produto contratado poderá navegar entre eles na
            mesma plataforma.
          </p>
        </div>
        <br />
        <div class="container-elementos">
          <el-row style="gap: 10px">
            <!-- Produtos -->
            <el-popover placement="bottom" style="padding: 0; background: green" trigger="click" :width="200">
              <template #reference>
                <img class="icon" src="imagens_design_system/icons/blackicons/produtos.svg" alt="produto" />
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
          </el-row>
        </div>

        <!-- Notificações -->
        <div>
          <h3>Notificações</h3>
          <hr />
          <br />
          <p>
            As notificações servem para mostrar todas as atualizações nos
            produtos que o usuário adquiriu, como novas funcionalidades,
            alterações, versões novas, entrada de novos colaboradores, etc.
          </p>
        </div>
        <br />
        <div class="container-elementos">
          <!-- Notificações -->
          <el-popover placement="bottom" trigger="click" :width="400">
            <template #reference>
              <img class="icon" src="imagens_design_system/icons/blackicons/notificacao.svg" alt="Notificação" />
            </template>
            <el-col>
              <el-row class="optionMenu">O painel Logística foi atualizado - Versão 2.43.2.1</el-row>
              <hr />
              <el-row class="optionMenu">O colaborador Gustavo Emmanoel foi cadastrado</el-row>
              <hr />
              <el-row class="optionMenu">Você se cadastrou!</el-row>
            </el-col>
          </el-popover>
        </div>
        <!-- Dúvidas -->
        <div>
          <h3>Dúvidas</h3>
          <hr />
          <br />
          <p>
            Nas dúvidas, o usuário terá acesso a versão atual do software, links
            para tutoriais e central de dúvidas e reporte de bugs.
          </p>
        </div>
        <br />
        <div class="container-elementos">
          <!-- DÚVIDAS -->
          <el-popover placement="bottom" trigger="click" :width="300">
            <template #reference>
              <img class="icon" src="imagens_design_system/icons/blackicons/duvida.svg" alt="Dúvidas" />
            </template>
            <el-col>
              <el-row class="optionMenu">versão: 2cf2f45f</el-row>
              <hr />
              <el-row class="optionMenu">Dúvidas? entre em contato por:
                <p class="dm_azul_00_color">datamachina@datamachina.com.br</p>
              </el-row>
            </el-col>
          </el-popover>
        </div>
        <!-- Perfil -->
        <div>
          <h3>Perfil</h3>
          <hr />
          <br />
          <p>
            No perfil o usuário poderá visualizar seu nome, e-mail e categoria
            de acesso. Além de ter acesso ao painel de configuração,
            colaboradores e logout.
          </p>
        </div>
        <br />
        <div class="container-elementos">
          <!-- PERFIL -->
          <el-popover placement="bottom" trigger="click" :width="360">
            <template #reference>
              <img class="icon" src="imagens_design_system/icons/blackicons/perfil.svg" alt="Perfil" />
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
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";
export default {
  name: "HeaderPage",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Header",
      activeName1: "first",
      activeName: "first",
    };
  },
};
</script>

<style scoped>
.usabilidade {
  width: 100%;
  border-radius: 6px;
  padding: 25px;
  margin-bottom: 30px;
}
</style>
