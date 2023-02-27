<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <div class="containerInterno">
          <div>
            <h1>/Loadings</h1>
            <hr />
            <br>

          </div>
          <br />
        </div>

        <h3>Loading barra</h3>
        <hr>
        <p>
          Barras de loading mostram o progresso de alguma operação do
          sistema que está sendo executada como download, upload ou
          processamento. São importantes para dar feedback ao usuário, um
          dos nosso princípios.
        </p>
        <br>
        <div class="container-elementos">
          <el-progress v-for="(porcentagens, index) in colors" :key="index" :stroke-width="14"
            :percentage="porcentagens.percentage" :color="porcentagens.color" :format="format" />

          <el-progress :stroke-width="14" :percentage="percentage1" :color="color1" />
          <el-progress :stroke-width="14" :percentage="percentage2" :color="color2" />
          <el-progress :stroke-width="14" :percentage="percentage3" :color="color3" />
          <el-progress :stroke-width="14" :percentage="percentage4" :color="color4" />

          <br />

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Ver código" name="1">
              <div class="html_codigos_blue">
                <span>&#60;<span tagColor>el-progress</span> :stroke-width=<span roxo>"14"</span> :percentage=<span
                    roxo>percentage1</span> :color=<span roxo>"color1"</span> /&#62;</span><br />
                <span>&#60;<span tagColor>el-progress</span> :stroke-width=<span roxo>"14"</span> :percentage=<span
                    roxo>percentage2</span> :color=<span roxo>"color2"</span> /&#62;</span><br />
                <span>&#60;<span tagColor>el-progress</span> :stroke-width=<span roxo>"14"</span> :percentage=<span
                    roxo>percentage3</span> :color=<span roxo>"color3"</span> /&#62;</span><br />
                <span>&#60;<span tagColor>el-progress</span> :stroke-width=<span roxo>"14"</span> :percentage=<span
                    roxo>percentage4</span> :color=<span roxo>"color4"</span> /&#62;</span><br />
              </div>

              <br>
              <div class="html_codigos_blue">
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

        <h3>loading</h3>
        <hr>

        <div class="container-elementos">
          <div class="cont--el-progress">
            <el-progress type="circle" :percentage="percentage1" :color="color1" />
            <el-progress type="circle" :percentage="percentage2" :color="color2" />
            <el-progress type="circle" :percentage="percentage3" :color="color3" />
            <el-progress type="circle" :percentage="percentage4" :color="color4" />
          </div>
          <br />

          <div class="demo-collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código" name="1">
                <div class="html_codigos_blue">
                  <span>&#60;<span tagColor>el-progress</span> type=<span roxo>"circle"</span> :percentage=<span
                      roxo>"percentage1"</span> :color=<span roxo>"color1"</span>/&#62;</span><br />
                  <span>&#60;<span tagColor>el-progress</span> type=<span roxo>"circle"</span> :percentage=<span
                      roxo>"percentage2"</span> :color=<span roxo>"color2"</span>/&#62;</span><br />
                  <span>&#60;<span tagColor>el-progress</span> type=<span roxo>"circle"</span> :percentage=<span
                      roxo>"percentage3"</span> :color=<span roxo>"color3"</span>/&#62;</span><br />
                  <span>&#60;<span tagColor>el-progress</span> type=<span roxo>"circle"</span> :percentage=<span
                      roxo>"percentage4"</span> :color=<span roxo>"color4"</span>/&#62;</span><br />
                </div>
                <br>
                <div class="html_codigos_blue">
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


        <h3>Bloqueio de tela</h3>
        <hr />
        <div class="container-elementos">
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
            <el-collapse-item title="Ver código" name="1">
              <div class="html_codigos_blue">

                <span green> &#60;!-- Button Loading --&#62;</span>
                <br>

                &#60;<span roxo>el-button</span> @click=<span yellow>"loadingDM"</span>
                type=<span roxo>"primario"</span>&#62;Ver loading&#60;/<span roxo>el-button</span>&#62;
                <br>
                <br>
                <span green> &#60;!-- Loading --&#62;</span>
                <br>
                &#60;<span tagColor>dm-loading</span> v-if=<span roxo>"showLoading"</span>&#62;
                <div recuo>
                  &#60;<span tagColor>dm-loading-background</span>&#62;
                  <div recuo>
                    &#60;<span tagColor>p</span> class=<span roxo>"body_01"</span>&#62;
                    Aguarde alguns instantes. &#60;br&#62; <br>
                    Estamos salvando tudo.&#60;/<span tagColor>p</span>&#62;
                    <br>
                    &#60;<span tagColor>el-progress</span> :stroke-width=<span roxo>"14"</span> :percentage=<span
                      roxo>"percentage"</span> :color=<span roxo>"color"</span> :format=<span roxo>"format"</span>
                    /&#62;
                    <br>
                    &#60;<span tagColor>p</span> class="detail_01"&#62;8 segundos restantes...&#60;/<span
                      tagColor>p</span>&#62;
                  </div>
                  &#60;/<span tagColor>dm-loading-background</span>&#62;

                  <br>
                  &#60;<span tagColor>el-button</span> @click=<span yellow>"loadingDM"</span> type=<span
                    roxo>"terciario"</span>&#62;Fechar demonstração&#60;/<span tagColor>el-button</span>&#62;
                </div>
                &#60;/<span tagColor>dm-loading</span>&#62;
              </div>
              <br>
              <br>
              <div class="html_codigos_blue">
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
                              showLoading: false,
                              <br>
                              color: "var(--dm_azul_00)",
                              <br>
                              percentage: 60


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
.cont--el-progress {
  display: flex;
  justify-content: space-between;
}
</style>

<style>
dm-loading {
  cursor: default;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
}

dm-loading-background,
.vitrine-loading {
  background: var(--dm_creme_02);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 500px;
  height: 300px;
  background: var(--dm_creme_02);
  padding: 40px;
  border-radius: 6px;
  color: var(--dm_preto_00);
  cursor: default;
}

dm-loading .el-progress {
  width: 100%
}
</style>