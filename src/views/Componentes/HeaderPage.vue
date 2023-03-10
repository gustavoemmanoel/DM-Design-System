<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <div>
          <h1>/Header</h1>
          <hr>
          <br />
        </div>
        <div class="cont-elements">
          <p>
            É a estrutura padrão de todas as telas da Data Machina. Ele agrega
            configurações e funcionalidades úteis para os usuários ao longo de
            toda a navegação.
          </p>
          <br />

          <!-- INICIO HEADER -->

          <div>
            <dm-header>
              <dm-header-logo>
                <img src="images_dm/icons/whiteicons/dm.svg" />
                <h4 style="color: var(--dm_creme_00)">DataMachina</h4>
              </dm-header-logo>

              <dm-header-icons style="gap: 10px">

                <!-- PRODUTOS -->

                <el-popover placement="bottom" style="padding: 0; background: green" trigger="click" :width="200">
                  <template #reference>
                    <dm-icon ProductsWhite />
                  </template>

                  <dm-menu>
                    <dm-menu-option>Logística</dm-menu-option>
                    <dm-menu-option>Chatbot</dm-menu-option>
                    <dm-menu-option>Data Machina</dm-menu-option>
                    <dm-menu-option>Design</dm-menu-option>
                  </dm-menu>
                </el-popover>

                <!-- NOTIFICAÇÕES -->

                <el-popover placement="bottom" trigger="click" :width="400">
                  <template #reference>
                    <dm-icon BellWhite />
                  </template>
                  <dm-menu>
                    <dm-menu-option>O painel Logística foi atualizado - Versão
                      2.43.2.1</dm-menu-option>
                    <dm-menu-option>O colaborador Gustavo Emmanoel foi cadastrado</dm-menu-option>
                    <dm-menu-option>Você se cadastrou!</dm-menu-option>
                  </dm-menu>
                </el-popover>

                <!-- DÚVIDAS -->

                <el-popover placement="bottom" trigger="click" :width="300">
                  <template #reference>
                    <dm-icon HelpWhite />
                  </template>
                  <dm-menu>
                    <dm-menu-option>versão: 2cf2f45f</dm-menu-option>
                    <dm-menu-option>
                      Dúvidas? entre em contato por:
                      <span class="dm_azul_00_color">datamachina@datamachina.com.br</span>
                    </dm-menu-option>
                  </dm-menu>
                </el-popover>

                <!-- PERFIL -->

                <el-popover placement="bottom" trigger="click" :width="360">
                  <template #reference>
                    <dm-icon UserWhite />
                  </template>
                  <dm-menu>
                    <dm-menu-option-user>
                      <div>
                        <p class="body_01">Mateus Durães </p>
                        <el-tag type="azul">Administrador</el-tag>
                      </div>
                      mateusduraessantos@datamachina.com.br
                    </dm-menu-option-user>
                    <dm-menu-option>Configurações</dm-menu-option>
                    <dm-menu-option>Configurações</dm-menu-option>
                    <dm-menu-option>
                      Sair
                    </dm-menu-option>
                  </dm-menu>
                </el-popover>
              </dm-header-icons>
            </dm-header>

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
        </div>

        <div class="cont-elements">
          <h3>Header Principal</h3>
          <br />

          <div>
            <dm-header>
              <dm-header-logo>
                <img class="img-header" src="images_dm/icons/whiteicons/dm.svg" />
                <h4 style="color: var(--dm_creme_00)">DataMachina</h4>
              </dm-header-logo>

              <dm-header-icons>

                <!-- PRODUTOS -->

                <el-popover placement="bottom" style="padding: 0; background: green" trigger="click" :width="200">
                  <template #reference>
                    <dm-icon ProductsWhite />
                  </template>
                  <dm-menu>
                    <dm-menu-option>Logística</dm-menu-option>
                    <dm-menu-option>Chatbot</dm-menu-option>
                    <dm-menu-option>Data Machina</dm-menu-option>
                    <dm-menu-option>Design</dm-menu-option>
                  </dm-menu>
                </el-popover>

                <!-- NOTIFICAÇÕES -->

                <el-popover placement="bottom" trigger="click" :width="400">
                  <template #reference>
                    <dm-icon BellWhite />
                  </template>

                  <dm-menu>
                    <dm-menu-option>O painel Logística foi atualizado - Versão
                      2.43.2.1</dm-menu-option>
                    <dm-menu-option>O colaborador Gustavo Emmanoel foi cadastrado</dm-menu-option>
                    <dm-menu-option>Você se cadastrou!</dm-menu-option>
                  </dm-menu>
                </el-popover>

                <!-- DÚVIDAS -->

                <el-popover placement="bottom" trigger="click" :width="300">
                  <template #reference>
                    <dm-icon HelpWhite />
                  </template>
                  <dm-menu>
                    <dm-menu-option>versão: 2cf2f45f</dm-menu-option>
                    <dm-menu-option>
                      Dúvidas? entre em contato por:
                      <p class="dm_azul_00_color">
                        datamachina@datamachina.com.br
                      </p>
                    </dm-menu-option>
                  </dm-menu>
                </el-popover>

                <!-- PERFIL -->

                <el-popover placement="bottom" trigger="click" :width="360">
                  <template #reference>
                    <dm-icon UserWhite />
                  </template>
                  <dm-menu>
                    <dm-menu-option-user>
                      <div>
                        <p class="body_01">Mateus Durães </p>
                        <el-tag type="azul">Administrador</el-tag>
                      </div>
                      mateusduraessantos@datamachina.com.br
                    </dm-menu-option-user>
                    <dm-menu-option>Configurações</dm-menu-option>
                    <dm-menu-option>Configurações</dm-menu-option>
                    <dm-menu-option>Sair</dm-menu-option>
                  </dm-menu>
                </el-popover>
              </dm-header-icons>
            </dm-header>
          </div>
          <br />

          <!-- Código para copiar -->

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="ver código">
              <div class="html_codigos">
                <span>&#60;<span tagColor>dm-header</span>&#62;</span>
                <div class="border-left">
                  <div recuo>
                    <span>&#60;<span tagColor>dm-header-logo</span>&#62;</span>
                    <div class="border-left">
                      <div recuo>
                        <span>
                          &#60;<span tagColor>img</span> class=<span roxo>"img-header"</span>
                          src=<span roxo>"images_dm/icons/whiteicons/dm.svg"</span>/&#62;
                          <br /> </span><span>
                          &#60;<span tagColor>h4</span> style=<span roxo>"color:
                            var(--dm_creme_00)"</span>&#62;</span><span black>DataMachina</span><span>&#60;/<span
                            tagColor>h4</span>&#62;</span>
                      </div>
                    </div>
                    <span>&#60;/<span tagColor>dm-header-logo</span>&#62;</span>
                    <br />
                    <br />
                    &#60;<span tagColor>dm-header-icons</span>&#62;
                    <div class="border-left">
                      <div recuo>

                        <!-- PRODUTOS -->

                        <br />
                        <span green>&#60;!-- Produtos --&#62;</span>
                        <br />
                        <br />
                        <span>&#60;<span tagColor>el-popover</span>
                          placement=<span roxo>"bottom"</span> style=<span roxo>"padding: 0; background:
                            green"</span>
                          trigger=<span roxo>"click"</span> :width=<span roxo>"200"</span>&#62;</span>
                        <div class="border-left">
                          <div recuo>
                            <span>&#60;<span tagColor>template</span> <span roxo>#reference</span>&#62;</span>
                            <br />
                            <div class="border-left">
                              <div recuo>
                                <span>&#60;<span tagColor>dm-icon</span> ProductsWhite /&#62; </span>
                              </div>
                            </div>
                            <span>&#60;/<span tagColor>template</span>&#62;</span>
                            <br />

                            <!--  -->

                            <span>&#60;<span tagColor>dm-menu</span>&#62;</span>
                            <br />
                            <div class="border-left">
                              <div recuo>
                                <span>&#60;<span tagColor>dm-menu-option</span>&#62;</span><span
                                  black>Logística</span><span>&#60;/<span tagColor>dm-menu-option</span>&#62;</span>
                                <br />
                                <span>&#60;<span tagColor>dm-menu-option</span>&#62;</span><span
                                  black>Chatbot</span><span>&#60;/<span tagColor>dm-menu-option</span>&#62;</span>
                                <br />
                                <span>&#60;<span tagColor>dm-menu-option</span>&#62;</span><span black>Data
                                  Machina</span><span>&#60;/<span tagColor>dm-menu-option</span>&#62;</span>
                                <br />
                                <span>&#60;<span tagColor>dm-menu-option</span>&#62;</span><span
                                  black>Design</span><span>&#60;/<span tagColor>dm-menu-option</span>&#62;</span>
                                <br />
                              </div>
                            </div>
                            <span>&#60;/<span tagColor>dm-menu</span>&#62;</span>

                            <!--  -->

                          </div>
                        </div>
                        <span>&#60;/<span tagColor>el-popover</span>&#62;</span>
                        <br />

                        <!-- NOTIFICAÇÕES -->

                        <br>
                        <span green>&#60;!-- Notificações --&#62;</span>
                        <br />
                        <br />
                        <span>&#60;<span tagColor>el-popover</span>
                          placement=<span roxo>"bottom"</span> trigger=<span roxo>"click"</span>
                          :width=<span roxo>"400"</span>&#62;</span>
                        <br />
                        <div class="border-left">
                          <div recuo>
                            <span>&#60;<span tagColor>template</span> <span roxo>#reference</span>&#62;</span>
                            <br />
                            <div class="border-left">
                              <div recuo>
                                <span>&#60;<span tagColor>dm-icon</span> BellWhite /&#62;</span>
                              </div>
                            </div>
                            <span>&#60;/<span tagColor>template</span>&#62;</span>
                          </div>
                          <div recuo>
                            <span>&#60;<span tagColor>dm-menu</span>&#62;</span>
                            <br />
                            <div class="border-left">
                              <div recuo>
                                <span>&#60;<span tagColor>dm-menu-option</span>&#62;</span><span black>O painel Logística
                                  foi atualizado - Versão 2.43.2.1</span><span>&#60;/<span
                                    tagColor>dm-menu-option</span>&#62;</span>
                                <br />
                                <span>&#60;<span tagColor>dm-menu-option</span>&#62;</span><span black>O colaborador
                                  Gustavo
                                  Emmanoel foi cadastrado</span><span>&#60;/<span
                                    tagColor>dm-menu-option</span>&#62;</span><br />
                                <span>&#60;<span tagColor>dm-menu-option</span>&#62;</span><span black>Você se
                                  cadastrou!</span><span>&#60;/<span tagColor>dm-menu-option</span>&#62;</span>
                                <br />
                              </div>
                            </div>
                            <span>&#60;/<span tagColor>dm-menu</span>&#62;</span>
                            <br />
                          </div>
                        </div>
                        <span>&#60;/<span tagColor>el-popover</span>&#62;</span>
                        <br />
                        <br />

                        <!-- DÚVIDAS -->

                        <span green>&#60;!-- Dúvidas --&#62;</span>
                        <br />
                        <br />
                        <span>&#60;<span tagColor>el-popover</span>
                          placement=<span roxo>"bottom"</span> trigger=<span roxo>"click"</span>
                          :width=<span roxo>"300"</span>&#62;</span>
                        <br />
                        <div class="border-left">
                          <div recuo>
                            <span>&#60;template <span roxo>#reference</span>&#62;</span>
                            <br />
                            <div class="border-left">
                              <div recuo>
                                <span>&#60;<span tagColor>dm-icon</span> HelpWhite /&#62; </span>
                              </div>
                            </div>
                            <span>&#60;/<span tagColor>template</span>&#62;</span>
                          </div>
                          <div recuo>
                            <span>&#60;<span tagColor>dm-menu</span>&#62;</span>
                            <br />
                            <div class="border-left">
                              <div recuo>
                                <span>&#60;<span tagColor>dm-menu-option</span>&#62;</span><span black>versão:
                                  2cf2f45f</span><span>&#60;/<span tagColor>dm-menu-option</span>&#62;</span>
                                <br />
                                &#60;<span tagColor>dm-menu-option</span>&#62;<span black>Dúvidas? entre em contato
                                  por:</span>
                                <br />
                                <div class="border-left">
                                  <div recuo>&#60;<span tagColor>p</span> class=<span roxo>"dm_azul_00_color"&#62;</span>
                                    <div black>datamachina@datamachina.com.br</div><span>&#60;/<span
                                        tagColor>p</span>&#62;</span>
                                  </div>
                                </div>
                                <span>&#60;/<span tagColor>dm-menu-option</span>&#62;</span>
                                <br />
                              </div>
                            </div>
                            <span>&#60;/<span tagColor>dm-menu</span>&#62;</span>
                            <br />
                          </div>
                        </div>
                        <span>&#60;/<span tagColor>el-popover</span>&#62;</span>
                        <br />
                        <br />

                        <!-- Perfil -->

                        <span green>&#60;!-- Perfil --&#62;</span>
                        <br />
                        <br />
                        &#60;<span tagColor>el-popover</span>
                        placement=<span roxo>"bottom"</span> trigger=<span roxo>"click"</span>
                        :width=<span roxo>"360"</span>&#62;
                        <br />
                        <div class="border-left">
                          <div recuo>
                            &#60;<span tagColor>template</span> <span roxo>#reference</span>&#62;
                            <br />
                            <div class="border-left">
                              <div recuo>
                                &#60;<span tagColor>dm-icon</span> UserWhite /&#62;
                              </div>
                            </div>
                            &#60;/<span tagColor>template</span>&#62;
                            <br />
                            &#60;<span tagColor>dm-menu</span>&#62;
                            <div class="border-left">
                              <div recuo>
                                &#60;<span tagColor>dm-menu-option-user</span>&#62;
                                <br />
                                <div class="border-left">
                                  <div recuo>
                                    &#60;<span tagColor>p</span> class=<span roxo>"body_01"</span>&#62;<span black>Mateus
                                      Durães</span>&#60;/<span tagColor>p</span>&#62;<br />
                                    &#60;<span tagColor>el-tag</span> type=<span roxo>"azul"</span>&#62;<span
                                      black>Administrador</span>&#60;/<span tagColor>el-tag</span>&#62;<span black>
                                      <br />
                                      mateusduraessantos@datamachina.com.br</span>
                                  </div>
                                </div>
                                &#60;/<span tagColor>dm-menu-option-user</span>&#62;
                                <br />
                                &#60;<span tagColor>dm-menu-option</span>&#62;<span black>Configurações</span>&#60;/<span
                                  tagColor>dm-menu-option</span>&#62;
                                <br />
                                &#60;<span tagColor>dm-menu-option</span>&#62;<span black>Configurações</span>&#60;/<span
                                  tagColor>dm-menu-option</span>&#62;
                                <br />
                                &#60;<span tagColor>dm-menu-option</span>&#62;
                                <br />
                                <div class="border-left">
                                  <div recuo>
                                    <span black>Sair</span>
                                  </div>
                                </div>
                                &#60;/<span tagColor>dm-menu-option</span>&#62;
                              </div>
                            </div>
                            &#60;/<span tagColor>dm-menu</span>&#62;
                          </div>
                        </div>
                        <span>&#60;/<span tagColor>el-popover</span>&#62;</span>
                      </div>
                    </div>
                    &#60;/<span tagColor>dm-header-icons</span>&#62;
                  </div>
                </div>
                <span>&#60;/<span tagColor>dm-header</span>&#62;</span>
                <br />
              </div>

            </el-collapse-item>
          </el-collapse>
        </div>
        <br />

        <!-- Sub Header -->

        <div class="cont-elements">
          <h3>Sub Header</h3>
          <br />
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
            <el-collapse-item title="ver código">
              <div class="html_codigos">

                &#60;<span tagColor>template</span>&#62;
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
                            " name=<span roxo>"third"</span>&#62;
                            <span black>Role</span>
                            &#60;/<span tagColor>el-tab-pane</span>&#62; <br />
                            &#60;<span tagColor>el-tab-pane</span> label="<span roxo>Task</span>" name=<span
                              roxo>"fourth"</span>&#62;<span black>Task</span>&#60;/<span
                              tagColor>el-tab-pane</span>&#62;<br />
                          </div>
                        </div>
                        &#60;/<span tagColor>el-tabs</span>&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>el-col</span>&#62;
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
                    <span yellow>data</span>() {
                    <br />
                    <div class="border-left">
                      <div recuo>
                        <span roxo>return</span> {
                        <div class="border-left">
                          <div recuo>
                            activeName: <span brown>"first"</span>,
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
            </el-collapse-item>
          </el-collapse>
        </div>

        <div class="cont-elements">
          <h3>Produtos</h3>
          <br />
          <p>
            Aqui os produtos da Data Machina serão listados. Se o usuário possuir mais de um produto contratado poderá
            navegar entre eles na mesma plataforma.
          </p>
          <br>

          <!-- Produtos -->

          <div class="container-icons">
            <span>
              <h4>Padrão</h4>
              <br>
              <el-popover placement="bottom" trigger="click" :width="200">
                <template #reference>
                  <dm-icon Products />
                </template>
                <dm-menu class="dm-popover">
                  <dm-menu-option>Logística</dm-menu-option>
                  <dm-menu-option>Chatbot</dm-menu-option>
                  <dm-menu-option>Data Machina</dm-menu-option>
                  <dm-menu-option>Design</dm-menu-option>
                </dm-menu>
              </el-popover>
            </span>
            <span>
              <h4>Exemplo</h4>
              <br>
              <img src="header/01.svg" width="200">
            </span>
          </div>
          <br>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="ver código">
              <div class="html_codigos">
                &#60;<span tagColor>el-popover</span> placement=<span roxo>"bottom"</span> style=<span roxo>"padding: 0;
                  background: green"</span>
                trigger=<span roxo>"click"</span> :width=<span roxo>"200"</span>&#62;
                <div class="border-left">
                  <div recuo>
                    &#60;<span tagColor>template</span> #reference&#62;
                    <div class="border-left">
                      <div recuo>&#60;<span tagColor>dm-icon</span> Products /&#62;</div>
                    </div>
                    &#60;/<span tagColor>template</span>&#62;
                    <br>
                    &#60;<span tagColor>dm-menu</span>&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>dm-menu-option</span>&#62;<span black>Logística</span>&#60;/<span
                          tagColor>dm-menu-option</span>&#62;<br>
                        &#60;<span tagColor>dm-menu-option</span>&#62;<span black>Chatbot</span>&#60;/<span
                          tagColor>dm-menu-option</span>&#62;<br>
                        &#60;<span tagColor>dm-menu-option</span>&#62;<span black>Data Machina</span>&#60;/<span
                          tagColor>dm-menu-option</span>&#62;<br>
                        &#60;<span tagColor>dm-menu-option</span>&#62;<span black>Design</span>&#60;/<span
                          tagColor>dm-menu-option</span>&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>dm-menu</span>&#62;
                  </div>
                </div>
                &#60;/<span tagColor>el-popover</span>&#62;
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>

        <!-- NOTIFICAÇÕES -->

        <div class="cont-elements">

          <h3>Notificações</h3>
          <br />
          <p>
            As notificações servem para mostrar todas as atualizações nos
            produtos que o usuário adquiriu, como novas funcionalidades,
            alterações, versões novas, entrada de novos colaboradores, etc.
          </p>
          <br>

          <div class="container-icons">
            <span>
              <h4>Padrão</h4>
              <br>
              <el-popover placement="bottom" trigger="click" :width="400">
                <template #reference>
                  <dm-icon Bell />
                </template>
                <dm-menu>
                  <dm-menu-option>O painel Logística foi atualizado - Versão 2.43.2.1</dm-menu-option>
                  <dm-menu-option>O colaborador Gustavo Emmanoel foi cadastrado</dm-menu-option>
                  <dm-menu-option>Você se cadastrou!</dm-menu-option>
                </dm-menu>
              </el-popover>
            </span>
            <span>
              <h4>Exemplo</h4>
              <br>
              <img src="header/notificacao.svg">
            </span>
          </div>

          <!--  -->

          <br>
          <br>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="ver código">
              <div class="html_codigos">
                &#60;<span tagColor>el-popover</span> placement=<span roxo>"bottom"</span> trigger=<span
                  roxo>"click"</span>
                :width=<span roxo>"400"</span>&#62;
                <div class="border-left">
                  <div recuo>
                    &#60;<span tagColor>template</span> #reference&#62;
                    <div class="border-left">
                      <div recuo>&#60;<span tagColor>dm-icon</span> Bell /&#62;</div>
                    </div>
                    &#60;/<span tagColor>template</span>&#62; <br>
                    &#60;<span tagColor>dm-menu</span>&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>dm-menu-option</span> &#62;<span black>O painel Logística foi atualizado -
                          Versão 2.43.2.1</span>&#60;/<span tagColor>dm-menu-option</span>&#62; <br>
                        &#60;<span tagColor>dm-menu-option</span> &#62;<span black>O colaborador Gustavo Emmanoel foi
                          cadastrado</span>&#60;/<span tagColor>dm-menu-option</span>&#62;<br>
                        &#60;<span tagColor>dm-menu-option</span> &#62;<span black>Você se cadastrou!</span>&#60;/<span
                          tagColor>dm-menu-option</span>&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>dm-menu</span>&#62;
                  </div>
                </div>
                &#60;/<span tagColor>el-popover</span>&#62;
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>

        <!-- DÚVIDAS -->

        <div class="cont-elements">
          <h3>Dúvidas</h3>
          <br />
          <p>
            Nas dúvidas, o usuário terá acesso a versão atual do software, links para tutoriais e central de dúvidas e
            reporte de bugs.
          </p>
          <br>

          <div class="container-icons">

            <el-popover placement="bottom" trigger="click" :width="300">
              <template #reference>
                <dm-icon Help />
              </template>

              <dm-menu>
                <dm-menu-option>versão: 2cf2f45f</dm-menu-option>
                <dm-menu-option>Link para materiais de apoio</dm-menu-option>
                <dm-menu-option>Link para materiais de apoio</dm-menu-option>
                <dm-menu-option>
                  <p>Dúvidas? entre em contato por:</p>
                  <p class="dm_azul_00_color">datamachina@datamachina.com.br</p>
                </dm-menu-option>
              </dm-menu>
            </el-popover>

            <img src="header/duvida.svg">
          </div>
          <br>
          <br>

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="ver código">
              <div class="html_codigos">
                &#60;<span tagColor>el-popover</span> placement=<span roxo>"bottom"</span> trigger=<span
                  roxo>"click"</span>
                :width=<span roxo>"300"</span>&#62;
                <span>
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>template</span> #reference&#62;
                      <div class="border-left">
                        <div recuo>&#60;<span tagColor>dm-icon</span> Help /&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>template</span>&#62;<br>
                      &#60;<span tagColor>dm-menu</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>dm-menu-option</span>&#62;<span black>versão: 2cf2f45f</span> &#60;/<span
                            tagColor>dm-menu-option </span>&#62;<br>

                          &#60;<span tagColor>dm-menu-option</span>&#62;<span black>Link para materiais de
                            apoio</span>&#60;/<span tagColor>dm-menu-option</span>&#62; <br>
                          &#60;<span tagColor>dm-menu-option</span>&#62;<span black>Link para materiais de
                            apoio</span>&#60;/<span tagColor>dm-menu-option</span>&#62;<br>
                          &#60;<span tagColor>dm-menu-option</span>&#62;
                          <br>
                          <span black>Dúvidas? entre em contato por:</span>
                          <div class="border-left">
                            <div recuo>&#60;<span tagColor>p</span> class=<span roxo>"dm_azul_00_color"</span>&#62;<span
                                black>datamachina@datamachina.com.br</span> &#60;/<span tagColor>p</span>&#62; <br>
                            </div>
                          </div>
                          &#60;/<span tagColor>dm-menu-option</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>dm-menu</span>&#62;
                    </div>
                  </div>
                </span>
                &#60;/<span tagColor>el-popover</span>&#62;
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>

        <!-- PERFIL -->

        <div class="cont-elements">
          <h3>Perfil</h3>
          <br>
          <p>
            No perfil o usuário poderá visualizar seu nome, e-mail e categoria de acesso. Além de ter acesso ao painel
            de
            configuração, colaboradores e logout.
          </p>
          <br>


          <div class="container-icons">
            <span>
              <h4>Padrão</h4>
              <br>
              <el-popover placement="bottom" trigger="click" :width="360">
                <template #reference>
                  <dm-icon User />
                </template>
                <dm-menu>
                  <dm-menu-option class="optionMenu perfil">
                    <div class="perfil">
                      <p class="body_01">Mateus Durães</p>
                      <el-tag type="azul">Administrador</el-tag>
                    </div>
                    mateusduraessantos@datamachina.com.br
                  </dm-menu-option>
                  <dm-menu-option>Configurações</dm-menu-option>
                  <dm-menu-option>Configurações</dm-menu-option>
                  <dm-menu-option>Sair</dm-menu-option>
                </dm-menu>
              </el-popover>
            </span>
            <span>
              <h4>Exemplo</h4>
              <br>
              <img src="header/perfil.svg">
            </span>
          </div>
          <br>
          <br>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="ver código">
              <div class="html_codigos">
                &#60;<span tagColor>el-popover</span>
                placement=<span roxo>"bottom"</span> trigger=<span roxo>"click"</span>
                :width=<span roxo>"360"</span>&#62;
                <br />
                <div class="border-left">
                  <div recuo>
                    &#60;<span tagColor>template</span> <span roxo>#reference</span>&#62;
                    <br />
                    <div class="border-left">
                      <div recuo>&#60;<span tagColor>dm-icon</span> User /&#62;</div>
                    </div>
                    &#60;/<span tagColor>template</span>&#62;
                    <br />
                    &#60;<span tagColor>dm-menu</span>&#62;
                    <div recuo>
                      &#60;<span tagColor>dm-menu-option-user</span>&#62;
                      <br />
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>p</span> class=<span roxo>"body_01"</span>&#62;<span black>Mateus
                            Durães</span>&#60;/<span tagColor>p</span>&#62;<br />
                          &#60;<span tagColor>el-tag</span> type=<span roxo>"azul"</span>&#62;<span
                            black>Administrador</span>&#60;/<span tagColor>el-tag</span>&#62;<span black>
                            <br />
                            mateusduraessantos@datamachina.com.br</span>
                        </div>
                      </div>
                      &#60;/<span tagColor>dm-menu-option-user</span>&#62;
                      <br />
                      &#60;<span tagColor>dm-menu-option</span>&#62;<span black>Configurações</span>&#60;/<span
                        tagColor>dm-menu-option</span>&#62;
                      <br />
                      &#60;<span tagColor>dm-menu-option</span>&#62;<span black>Configurações</span>&#60;/<span
                        tagColor>dm-menu-option</span>&#62;
                      <br />
                      &#60;<span tagColor>dm-menu-option</span>&#62;
                      <br />
                      <div recuo>
                        <span black>Sair</span>
                      </div>
                      &#60;/<span tagColor>dm-menu-option</span>&#62;
                    </div>
                    &#60;/<span tagColor>dm-menu</span>&#62;
                  </div>
                </div>
                &#60;/<span tagColor>el-popover</span> &#62;
              </div>
            </el-collapse-item>
          </el-collapse>
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

.container-icons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  margin: auto;
}
</style>