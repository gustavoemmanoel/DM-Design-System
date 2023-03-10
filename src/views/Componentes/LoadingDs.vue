<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <h1>/Loadings</h1>
        <hr />
        <br>
        <div class="cont-elements">
          <h3>Loading barra</h3>
          <br>
          <p>
            Barras de loading mostram o progresso de alguma operação do
            sistema que está sendo executada como download, upload ou
            processamento. São importantes para dar feedback ao usuário, um
            dos nosso princípios.
          </p>
          <br>
          <el-progress v-for="(porcentagens, index) in colors" :key="index" :stroke-width="14"
            :percentage="porcentagens.percentage" :color="porcentagens.color" :format="format" />

          <el-progress :stroke-width="14" :percentage="percentage1" :color="color1" />
          <el-progress :stroke-width="14" :percentage="percentage2" :color="color2" />
          <el-progress :stroke-width="14" :percentage="percentage3" :color="color3" />
          <el-progress :stroke-width="14" :percentage="percentage4" :color="color4" />

          <br />

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Ver código">
              <div class="html_codigos">

                &#60;<span tagColor>template</span>&#62;

                <div class="border-left">
                  <div recuo>
                    <span>&#60;<span tagColor>el-progress</span> :stroke-width=<span roxo>"14"</span> :percentage=<span
                        roxo>percentage1</span> :color=<span roxo>"color1"</span> /&#62;</span><br />
                    <span>&#60;<span tagColor>el-progress</span> :stroke-width=<span roxo>"14"</span> :percentage=<span
                        roxo>percentage2</span> :color=<span roxo>"color2"</span> /&#62;</span><br />
                    <span>&#60;<span tagColor>el-progress</span> :stroke-width=<span roxo>"14"</span> :percentage=<span
                        roxo>percentage3</span> :color=<span roxo>"color3"</span> /&#62;</span><br />
                    <span>&#60;<span tagColor>el-progress</span> :stroke-width=<span roxo>"14"</span> :percentage=<span
                        roxo>percentage4</span> :color=<span roxo>"color4"</span> /&#62;</span><br />
                  </div>
                </div>
                &#60;<span tagColor>template</span> /&#62;
              </div>
              <br>
              <div class="html_codigos">
                &#60;<span tagColor>script</span>&#62;
                <br>
                <span roxo>export default</span> {
                <div class="border-left">
                  <div recuo>
                    <div>
                      name: <span roxo>"LoadingDs"</span>, <br>
                    </div>
                    <div>
                      data() {
                      <div class="border-left">
                        <div recuo>
                          <span roxo>return</span> {
                          <div class="border-left">
                            <div recuo>
                              color1: <span brown>"var(--dm_vermelho_00)"</span>,<br>
                              percentage1: <span green>25</span>,<br>
                              color2: <span brown>"var(--dm_laranja_00)"</span>,<br>
                              percentage2: <span green>50</span>,<br>
                              color3: <span brown>"var(--dm_amarelo_00)"</span>,<br>
                              percentage3: <span green>75</span>,<br>
                              color4: <span brown>"var(--dm_verde_00)"</span>,<br>
                              percentage4: <span green>100</span>,<br>
                            </div>
                          </div>
                          };
                        </div>
                      </div>
                      },
                    </div>
                  </div>
                </div>
                };
                <br>
                &#60;/<span tagColor>script</span>&#62;
              </div>

            </el-collapse-item>
          </el-collapse>
        </div>


        <div class="cont-elements">
          <h3>Loading</h3>
          <br>
          <br>
          <div class="cont--el-progress">
            <el-progress type="circle" :percentage="percentage1" :color="color1" />
            <el-progress type="circle" :percentage="percentage2" :color="color2" />
            <el-progress type="circle" :percentage="percentage3" :color="color3" />
            <el-progress type="circle" :percentage="percentage4" :color="color4" />
          </div>
          <br />
          <div class="demo-collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <div class="html_codigos">
                  &#60;<span tagColor>template</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      <span>&#60;<span tagColor>el-progress</span> type=<span roxo>"circle"</span> :percentage=<span
                          roxo>"percentage1"</span> :color=<span roxo>"color1"</span>/&#62;</span><br />
                      <span>&#60;<span tagColor>el-progress</span> type=<span roxo>"circle"</span> :percentage=<span
                          roxo>"percentage2"</span> :color=<span roxo>"color2"</span>/&#62;</span><br />
                      <span>&#60;<span tagColor>el-progress</span> type=<span roxo>"circle"</span> :percentage=<span
                          roxo>"percentage3"</span> :color=<span roxo>"color3"</span>/&#62;</span><br />
                      <span>&#60;<span tagColor>el-progress</span> type=<span roxo>"circle"</span> :percentage=<span
                          roxo>"percentage4"</span> :color=<span roxo>"color4"</span>/&#62;</span>
                    </div>
                  </div>
                  &#60;<span tagColor>template</span> /&#62;
                </div>
                <br>
                <div class="html_codigos">
                  &#60;<span tagColor>script</span>&#62;
                  <br>
                  <span roxo>export default</span> {
                  <div class="border-left">
                    <div recuo>
                      <div>
                        name: <span roxo>"LoadingDs"</span>, <br>
                      </div>
                      <div>
                        data() {
                        <div class="border-left">
                          <div recuo>
                            <span roxo>return</span> {
                            <div class="border-left">
                              <div recuo>
                                color1: <span brown>"var(--dm_vermelho_00)"</span>,<br>
                                percentage1: <span green>25</span>,<br>
                                color2: <span brown>"var(--dm_laranja_00)"</span>,<br>
                                percentage2: <span green>50</span>,<br>
                                color3: <span brown>"var(--dm_amarelo_00)"</span>,<br>
                                percentage3: <span green>75</span>,<br>
                                color4: <span brown>"var(--dm_verde_00)"</span>,<br>
                                percentage4: <span green>100</span>,<br>

                              </div>
                            </div>

                            };
                          </div>
                        </div>
                        },
                      </div>
                    </div>
                  </div>
                  };
                  <br>
                  &#60;/<span tagColor>script</span>&#62;
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>


        <div class="cont-elements">
          <h3>Bloqueio de tela</h3>
          <br>
          <p>Loadings que bloqueiam a tela são necessários quando o sistema não quer que o usuário execute outras
            operações em segundo plano. O popup de loading exibe um texto que descreve a operação, uma barra de progresso,
            a porcentagem executada do processo e em alguns casos, o tempo estimado para sua conclusão.</p>
          <br>
          <div class="cont--el-progress">

            <!-- Vitrine loading -->
            <div class="vitrine-loading">
              <p class="body_01">Aguarde alguns instantes. <br>
                Estamos salvando tudo.</p>
              <div style="width: 100%;">
                <el-progress :stroke-width="14" :percentage="percentage" :color="color" :format="format" />

              </div>
              <p class="detail_01">8 segundos restantes...</p>
            </div>

            <!-- Button Loading -->
            <el-button @click="loadingDM" type="primario">Ver loading</el-button>

            <!-- Loading -->
            <dm-loading v-if="showLoading">
              <dm-loading-background>
                <p class="body_01"> Aguarde alguns instantes. <br>
                  Estamos salvando tudo.</p>
                <el-progress :stroke-width="14" :percentage="percentage" :color="color" :format="format" />
                <p class="detail_01">8 segundos restantes...</p>
              </dm-loading-background>
              <el-button @click="loadingDM" type="terciario">Fechar demonstração</el-button>
            </dm-loading>
          </div>
          <br />

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Ver código">
              <div class="html_codigos">
                &#60;<span tagColor>template</span>&#62;
                <div class="border-left">
                  <div recuo>
                    <span green> &#60;!-- Button Loading --&#62;</span>
                    <br>
                    &#60;<span roxo>el-button</span> @click=<span yellow>"loadingDM"</span>
                    type=<span roxo>"primario"</span>&#62;<span black>Ver loading</span>&#60;/<span
                      roxo>el-button</span>&#62;
                    <br>
                    <br>
                    <span green> &#60;!-- Loading --&#62;</span>
                    <br>
                    &#60;<span tagColor>dm-loading</span> v-if=<span roxo>"showLoading"</span>&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>dm-loading-background</span>&#62;
                        <div class="border-left">
                          <div recuo>
                            &#60;<span tagColor>p</span> class=<span roxo>"body_01"</span>&#62;
                            <span black>Aguarde alguns instantes.</span> &#60;br&#62; <br>
                            Estamos salvando tudo.&#60;/<span tagColor>p</span>&#62;
                            <br>
                            &#60;<span tagColor>el-progress</span> :stroke-width=<span roxo>"14"</span> :percentage=<span
                              roxo>"percentage"</span> :color=<span roxo>"color"</span> :format=<span roxo>"format"</span>
                            /&#62;
                            <br>
                            &#60;<span tagColor>p</span> class=<span roxo>"detail_01"</span>&#62;<span black>8 segundos
                              restantes...</span>&#60;/<span tagColor>p</span>&#62;
                          </div>
                        </div>
                        &#60;/<span tagColor>dm-loading-background</span>&#62;
                        <br>
                        &#60;<span tagColor>el-button</span> @click=<span yellow>"loadingDM"</span> type=<span
                          roxo>"terciario"</span>&#62;<span black>Fechar demonstração</span>&#60;/<span
                          tagColor>el-button</span>&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>dm-loading</span>&#62;
                  </div>
                </div>
                &#60;<span tagColor>template</span> /&#62;
              </div>
              <br>
              <div class="html_codigos">
                &#60;<span tagColor>script</span>&#62;
                <br>
                <span roxo>export default</span> {
                <div class="border-left">
                  <div recuo>
                    <div>
                      name: <span roxo>"LoadingDs"</span>, <br>
                    </div>
                    <div>
                      <span yellow>data</span>() {
                      <div class="border-left">
                        <div recuo>
                          <span roxo>return</span> {
                          <div class="border-left">
                            <div recuo>
                              showLoading: false,
                              <br>
                              color: "var(--dm_azul_00)",
                              <br>
                              percentage: <span green>60</span>


                            </div>
                          </div>

                          };
                        </div>
                      </div>
                      },
                    </div>
                    <span roxo>methods</span>: {
                    <div class="border-left">
                      <div recuo>
                        <span yellow>loadingDM</span>() {
                        <div class="border-left">
                          <div recuo>
                            <span blue>const</span> $body = document.<span yellow>querySelector</span>(<span
                              brown>'body'</span>) <br>

                            <span roxo>if</span> (!<span blue>this</span>.showLoading) {
                            <div class="border-left">
                              <div recuo>
                                <span blue2>$body</span>.style.overflow = <span brown>'hidden'</span> <br>
                                <span blue2>$body</span>.style.paddingRight = <span brown>'16px'</span> <br>

                                <span blue>this</span>.showLoading = !<span blue>this</span>.showLoading <br>
                              </div>
                            </div>
                            } <span roxo>else</span> {
                            <div class="border-left">
                              <div recuo>
                                <span blue2>$body</span>.style.overflow = <span brown>'auto'</span> <br>
                                <span blue2>$body</span>.style.paddingRight = <span brown>'0'</span> <br>
                                <span blue>this</span>.showLoading = !<span blue>this</span>.showLoading
                              </div>
                            </div>
                            }
                          </div>
                        </div>
                        },
                      </div>
                    </div>
                    },
                  </div>
                </div>
                };
                <br>
                &#60;/<span tagColor>script</span>&#62;
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="cont-elements">
          <h3>Segundo plano</h3>
          <br>
          <p>O loading em segundo plano acontece quando não é necessário bloquear a tela e o usuário pode continuar usando
            a platafoma enquanto o sistema processa a operação. Este loading não mostra o tempo para a conclusão e a
            porcentagem do progresso, no entanto mais detalhes aparecem no hover.</p>
          <br>


          <div class="grid-columns">
            <span>
              <h6>Default</h6>
              <br>
              <el-popover placement="bottom" trigger="click" :width="360">
                <template #reference>
                  <dm-icon loading working />
                </template>
                <dm-loading-second>
                  <dm-menu-option><dm-icon CheckGreen /> Configurações</dm-menu-option>
                  <dm-menu-option><dm-icon Loading working /> Configurações</dm-menu-option>
                  <dm-menu-option><dm-icon Loading working /> Configurações</dm-menu-option>
                  <dm-menu-option><dm-icon Loading working /> Configurações</dm-menu-option>
                  <dm-menu-option><dm-icon CheckGreen /> Configurações</dm-menu-option>
                  <dm-menu-option><dm-icon Loading working /> Configurações</dm-menu-option>
                  <dm-menu-option><dm-icon CloseRed /> Configurações</dm-menu-option>
                </dm-loading-second>
              </el-popover>
            </span>
            <span>
              <h6>Exemplo</h6>
              <br>
              <img width="300" src="loading/segundoplano.svg">
            </span>
          </div>

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Ver código">
              <div class="html_codigos">
                &#60;<span tagColor>el-popover</span> placement=<span roxo>"bottom"</span> trigger=<span
                  roxo>"click"</span> :width=<span roxo>"360"</span>&#62;
                <div class="border-left">
                  <div recuo>
                    &#60;<span tagColor>template</span> #reference&#62;
                    <div class="border-left">
                      <div recuo>&#60;<span tagColor>dm-icon</span> loading working /&#62;</div>
                    </div>
                    &#60;/<span tagColor>template</span>&#62; <br>
                    &#60;<span tagColor>dm-menu</span>&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagcolor>dm-menu-option</span>&#62;&#60;<span tagColor>dm-icon</span> CheckGreen /&#62;
                        <span black>Configurações</span>&#60;/<span tagcolor>dm-menu-option</span>&#62; <br>
                        &#60;<span tagcolor>dm-menu-option</span>&#62;&#60;<span tagColor>dm-icon</span> Loading working
                        /&#62; <span black>Configurações</span>&#60;/<span tagcolor>dm-menu-option</span>&#62; <br>
                        &#60;<span tagcolor>dm-menu-option</span>&#62;&#60;<span tagColor>dm-icon</span> Loading working
                        /&#62; <span black>Configurações</span>&#60;/<span tagcolor>dm-menu-option</span>&#62; <br>
                        &#60;<span tagcolor>dm-menu-option</span>&#62;&#60;<span tagColor>dm-icon</span> Loading working
                        /&#62; <span black>Configurações</span>&#60;/<span tagcolor>dm-menu-option</span>&#62; <br>
                        &#60;<span tagcolor>dm-menu-option</span>&#62;&#60;<span tagColor>dm-icon</span> CheckGreen /&#62;
                        <span black>Configurações</span>&#60;/<span tagcolor>dm-menu-option</span>&#62; <br>
                        &#60;<span tagcolor>dm-menu-option</span>&#62;&#60;<span tagColor>dm-icon</span> Loading working
                        /&#62; <span black>Configurações</span>&#60;/<span tagcolor>dm-menu-option</span>&#62; <br>
                        &#60;<span tagcolor>dm-menu-option</span>&#62;&#60;<span tagColor>dm-icon</span> CloseRed /&#62;
                        <span black>Configurações</span>&#60;/<span tagcolor>dm-menu-option</span>&#62;
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
        <div class="cont-elements">
          <h3>Carregando dentro de um contêiner</h3>
          <br>
          <p>Exibe animação em um contêiner (como uma tabela) durante o carregamento de dados.</p>
          <br>
          <el-table v-loading="loading" :data="tableData" style="width: 100%" element-loading-svg-view-box="0,0,0,0">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </el-table>


          <br>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Ver código">
              <div class="html_codigos">
                &#60;<span tagColor>template</span>&#62;
                <div class="border-left">
                  <div recuo>
                    &#60;<span tagColor>el-table</span> v-loading=<span roxo>"loading"</span> :data=<span
                      roxo>"tableData"</span> style=<span roxo>"width: 100%"</span> element-loading-svg-view-box=<span
                      roxo>"0,0,0,0"</span>&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>el-table-column</span> prop=<span roxo>"date</span>" label=<span
                          roxo>"Date"</span> width=<span roxo>"180"</span> /&#62; <br>
                        &#60;<span tagColor>el-table-column</span> prop=<span roxo>"name</span>" label=<span
                          roxo>"Name"</span> width=<span roxo>"180"</span> /&#62; <br>
                        &#60;<span tagColor>el-table-column</span> prop=<span roxo>"address</span>" label=<span
                          roxo>"Address"</span> /&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>el-table</span>&#62;
                  </div>
                </div>
                &#60;/<span tagColor>template</span>&#62;
              </div>

              <br>
              <div class="html_codigos">
                &#60;<span tagColor>script</span>&#62;
                <br>
                <span roxo>export default</span> {
                <div class="border-left">
                  <div recuo>
                    <span yellow>data</span>() {
                    <div class="border-left">
                      <div recuo>
                        <span roxo>return</span> {
                        <div class="border-left">
                          <div recuo>
                            loading: <span blue>true</span>,
                            <br>
                            tableData: [
                            <div class="border-left">
                              <div recuo>
                                {
                                <div class="border-left">
                                  <div recuo>
                                    date: <span brown>"10/03/2023"</span>, <br />
                                    name: <span brown>"Design System"</span>, <br />
                                    address: <span brown>"São Paulo"</span>
                                  </div>
                                </div>
                                }, <br>
                                {
                                <div class="border-left">
                                  <div recuo>
                                    date: <span brown>"10/03/2023"</span>, <br />
                                    name: <span brown>"Design System"</span>, <br />
                                    address: <span brown>"São Paulo"</span>
                                  </div>
                                </div>
                                }, <br>
                                {
                                <div class="border-left">
                                  <div recuo>
                                    date: <span brown>"10/03/2023"</span>, <br />
                                    name: <span brown>"Design System"</span>, <br />
                                    address: <span brown>"São Paulo"</span>
                                  </div>
                                </div>
                                },
                              </div>
                            </div>
                            ],
                          </div>
                        </div>
                        }
                      </div>
                    </div>
                    }
                  </div>
                </div>
                }
                <br>
                &#60;/<span tagColor>script</span>&#62;
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
  name: "LoadingDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      loading: true,

      tableData: [
        {
          date: "10/03/2023",
          name: "Design System",
          address: "São Paulo"
        },
        {
          date: "10/03/2023",
          name: "Design System",
          address: "São Paulo"
        },
        {
          date: "10/03/2023",
          name: "Design System",
          address: "São Paulo"
        },
      ],

      headerTitle: "Loading",
      showLoading: false,
      color: "var(--dm_azul_00)",
      percentage: 60,
      color1: "var(--dm_vermelho_00)",
      percentage1: 25,
      color2: "var(--dm_laranja_00)",
      percentage2: 50,
      color3: "var(--dm_amarelo_00)",
      percentage3: 75,
      color4: "var(--dm_verde_00)",
      percentage4: 100,
    };
  },
  methods: {
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    loadingDM() {
      const $body = document.querySelector('body')
      const $header = document.querySelector('.header')
      if (!this.showLoading) {
        $body.style.overflow = 'hidden'
        $body.style.paddingRight = '16px'
        $header.style.paddingRight = '16px'
        this.showLoading = !this.showLoading
      } else {
        $body.style.overflow = 'auto'
        $body.style.paddingRight = '0'
        $header.style.paddingRight = '0'
        this.showLoading = !this.showLoading
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
  },
};
</script>

<style scoped>
.grid-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.cont--el-progress {
  display: flex;
  justify-content: space-between;
}
</style>
