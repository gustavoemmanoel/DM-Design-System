<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <div>
          <h1>/Login</h1>
          <hr />
          <br />
          <p>Tela de login.</p>
        </div>
        <br />
        <div class="cont-elements">
          <div class="cont-elements--login">
            <span class="overflow">
              <!-- Tela de login -->
              <div>
                <el-row>
                  <el-col :span="12" class="form-container">
                    <el-col :span="16">
                      <el-form class="form">
                        <h1>
                          <span style="color: var(--dm_azul_00)">/</span>Login
                        </h1>
                        <br />

                        <el-form-item>
                          <el-input type="text" placeholder="E-mail" />
                        </el-form-item>

                        <el-form-item>
                          <el-input type="password" placeholder="Senha" />
                        </el-form-item>

                        <el-form-item>
                          <el-button type="primario" class="form__button">Entrar</el-button>
                        </el-form-item>

                        <el-button type="terciario">Esqueceu a senha?</el-button>
                      </el-form>

                      <p class="fale-conosco">
                        <span style="color: var(--dm_azul_00)">/</span>fale
                        conosco: <u>contato@datamachina.com.br</u>
                      </p>
                    </el-col>
                  </el-col>

                  <el-col :span="12" class="grafismo">
                    <div class="grafismo-cont">
                      <img class="grafismo-cont__img" src="images_dm/login-grafismo.jpg" alt="background" />
                    </div>
                    <div class="grafismo__protagonizar">
                      <div class="grafismo__content">
                        <h3 class="grafismo__title">
                          <span style="color: var(--dm_azul_00)">/</span>Protagonizar a mudança!
                        </h3>
                        <img class="grafismo__dm" src="images_dm/dm_login.svg" alt="Data Machina" />
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <!-- Fim Tela de login -->
            </span>
          </div>
          <br />
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Ver código">
              <div class="html_codigos">
                &#60;<span tagColor>div</span>&#62;
                <div class="border-left">
                  <div recuo>
                    &#60;<span tagColor>el-row</span>&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>el-col</span> :span=<span roxo>"12"</span>
                        class=<span roxo>"form-container"</span>&#62;
                        <div class="border-left">
                          <div recuo>
                            &#60;<span tagColor>el-col</span> :span=<span roxo>"16"</span>&#62;
                            <div class="border-left">
                              <div recuo>
                                &#60;<span tagColor>el-form</span>&#62;
                                <div class="border-left">
                                  <div recuo>
                                    &#60;<span tagColor>h1</span>&#62;&#60;<span tagColor>span</span>
                                    style=<span roxo>"color: var(--dm_azul_00)"</span>&#62;<span black>/</span>&#60;/<span
                                      tagColor>span</span>&#62;<span black>Login</span>&#60;/<span tagColor>h1</span>&#62;
                                    <br />
                                    &#60;<span tagColor>br</span> /&#62;
                                  </div>
                                  <!-- Email -->
                                  <div recuo>
                                    <span green>&#60;!-- Email --&#62;</span>
                                    <br />
                                    &#60;<span tagColor>el-form-item</span>&#62;
                                    <div class="border-left">
                                      <div recuo>
                                        &#60;<span tagColor>el-input</span>
                                        type=<span roxo>"text"</span>
                                        placeholder=<span roxo>"E-mail"</span>
                                        /&#62;
                                      </div>
                                    </div>
                                    &#60;/<span tagColor>el-form-item</span>&#62;
                                  </div>
                                  <!-- Senha -->
                                  <div recuo>
                                    <br />
                                    <span green>&#60;!-- Senha --&#62;</span>
                                    <br />
                                    &#60;<span tagColor>el-form-item</span>&#62;
                                    <div class="border-left">
                                      <div recuo>
                                        &#60;<span tagColor>el-input</span>
                                        type=<span roxo>"password"</span>
                                        placeholder=<span roxo>"Senha"</span>
                                        /&#62;
                                      </div>
                                    </div>
                                    &#60;/<span tagColor>el-form-item</span>&#62;
                                  </div>
                                  <!-- Entrar -->
                                  <div recuo>
                                    <br />
                                    <span green>&#60;!-- Entrar --&#62;</span>
                                    <br />
                                    &#60;<span tagColor>el-form-item</span>&#62;
                                    <div class="border-left">
                                      <div recuo>
                                        &#60;<span tagColor>el-button</span>
                                        type=<span roxo>"primario"</span>
                                        class=<span roxo>"form__button"</span>&#62;<span black>Entrar</span>&#60;/<span
                                          tagColor>el-button</span>&#62;
                                      </div>
                                    </div>
                                    &#60;/<span tagColor>el-form-item</span>&#62;
                                    <!-- button -->
                                    <br />
                                    <br />
                                    <span green>&#60;!-- Button --&#62;</span>
                                    <br />
                                    &#60;<span tagColor>el-button</span>
                                    type=<span roxo>"terciario"</span>&#62;<span black>Esqueceu a senha?</span>&#60;/<span
                                      tagColor>el-button</span>&#62;
                                  </div>
                                </div>
                                &#60;/<span tagColor>el-form</span>&#62;
                                <br />
                                &#60;<span tagColor>p</span> class=<span roxo>"fale-conosco"</span>&#62;
                                <div class="border-left">
                                  <div recuo>
                                    &#60;<span tagColor>span</span> style=<span roxo>"color:
                                      var(--dm_azul_00)"</span>&#62;<span black>/</span>&#60;/<span
                                      tagColor>span</span>&#62;<span black>fale conosco: </span>
                                    &#60;<span tagColor>u</span>&#62;<span
                                      black>contato@datamachina.com.br</span>&#60;/<span tagColor>u</span>&#62;
                                  </div>
                                </div>
                                &#60;/<span tagColor>p</span>&#62;
                                <br />
                              </div>
                            </div>
                            &#60;/<span tagColor>el-col</span>&#62;
                          </div>
                        </div>
                        &#60;/<span tagColor>el-col</span>&#62;
                        <br />
                        <br />
                        &#60;<span tagColor>el-col</span> :span=<span roxo>"12"</span>
                        class=<span roxo>"grafismo"</span>&#62;
                        <br />

                        <div class="border-left">
                          <div recuo>
                            &#60;<span tagColor>div</span> class=<span roxo>"grafismo-cont"</span>&#62;
                            <div class="border-left">
                              <div recuo>
                                &#60;<span tagColor>img</span> class=<span roxo>"grafismo-cont__img"</span>
                                src=<span roxo>"login-grafismo.jpg"</span> alt=<span roxo>"background"</span>
                                /&#62;
                              </div>
                            </div>
                            &#60;/<span tagColor>div</span>&#62;
                          </div>
                        </div>
                        <div class="border-left">
                          <div recuo>
                            &#60;<span tagColor>div</span> class=<span roxo>"grafismo__protagonizar"</span>&#62;
                            <div class="border-left">
                              <div recuo>
                                &#60;<span tagColor>div</span> class=<span roxo>"grafismo__content"</span>&#62;
                                <br />
                                <div class="border-left">
                                  <div recuo>
                                    &#60;<span tagColor>h3</span> class=<span roxo>"grafismo__title"</span>&#62;<br>
                                    <div recuo>
                                      &#60;<span tagColor>span</span> style=<span roxo>"color:
                                        var(--dm_azul_00)"</span>&#62;/&#60;/<span tagColor>span</span>&#62;<span
                                        black>Protagonizar a mudança!
                                      </span>
                                    </div>
                                    &#60;/<span tagColor>h3</span>&#62;
                                    <br />
                                    &#60;<span tagColor>img</span> class=<span roxo>"grafismo__dm"</span>
                                    src=<span roxo>"dm_login.svg"</span> alt=<span roxo>"Data Machina"</span>
                                    /&#62;
                                  </div>
                                </div>
                                &#60;/<span tagColor>div</span>&#62;
                              </div>
                            </div>
                            &#60;/<span tagColor>div</span>&#62;
                          </div>
                        </div>

                        &#60;/<span tagColor>el-col</span>&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>el-row</span>&#62;
                  </div>
                </div>
                &#60;/<span tagColor>div</span>&#62;
              </div>

              <br>
              <br>
              <div class="html_codigos">
                &#60;<span tagColor>style</span>&#62;
                <div class="border-left">
                  <div recuo>
                    <div>
                      <span yellow>.grafismo</span> {
                      <div class="border-left">
                        <div recuo>
                          position: <span brown>relative</span>;<br>
                          width: <span green>100%</span>;<br>
                          height: <span green>100vh</span>;
                        </div>
                      </div>
                      }
                    </div>
                    <br>
                    <div>
                      <span yellow>.grafismo-cont</span> {
                      <div class="border-left">
                        <div recuo>
                          width: <span green>100%</span>;<br>
                          height: <span green>100%</span>;<br>
                          overflow: <span brown>hidden</span>;
                        </div>
                      </div>
                      }
                    </div>
                    <br>
                    <div>
                      <span yellow>.grafismo-cont__img</span> {
                      <div class="border-left">
                        <div recuo>
                          object-fit: cover;<br>
                          width: <span green>100%</span>;<br>
                          height: <span green>100%</span>;
                        </div>
                      </div>
                      }
                    </div>
                    <br>
                    <div>
                      <span yellow>.grafismo__protagonizar</span> {
                      <div class="border-left">
                        <div recuo>
                          position: <span brown>absolute</span>;<br>
                          display: <span brown>flex</span>;<br>
                          justify-content: <span brown>center</span>;<br>
                          flex-direction: <span brown>column</span>;<br>
                          bottom: <span green>30px</span>;<br>
                          top: <span green>0</span>;<br>
                          width: <span green>100%</span>;<br>
                          height: <span green>100vh</span>;
                        </div>
                      </div>
                      }
                    </div>
                    <br>
                    <div>
                      <span yellow>.grafismo__content</span> {
                      <div class="border-left">
                        <div recuo>
                          position: <span brown>absolute</span>;<br>
                          width: <span brown>max-content</span>;<br>
                          margin-left: <span green>5%</span>;<br>
                          top: <span green>65vh</span>;
                        </div>
                      </div>
                      } <br>
                    </div>
                    <br>
                    <div>
                      <span yellow>.grafismo__title</span> {
                      <div class="border-left">
                        <div recuo>
                          background-color: var(<span blue>--dm_creme_02</span>);<br>
                          padding: <span green>18px</span>;<br>
                          font-weight: <span green>500</span>;<br>
                          color: var(<span blue>--dm_preto_00</span>);<br>
                          width: <span brown>max-content</span>;
                        </div>
                      </div>
                      }
                    </div>
                    <br>
                    <div>
                      <span yellow>.grafismo__dm</span> {
                      <div class="border-left">
                        <div recuo>
                          height: <span green>70px</span>;<br>
                          transform: translatex(<span green>305px</span>);
                        </div>
                      </div>
                      }
                    </div>
                    <br>
                    <div>
                      <span yellow>.form-container</span> {
                      <div class="border-left">
                        <div recuo>
                          background: var(<span blue>--dm_creme_02</span>);<br>
                          display: <span brown>flex</span>;<br>
                          align-items: <span brown>center</span>;<br>
                          justify-content: <span brown>center</span>;
                        </div>
                      </div>
                      }
                    </div>
                    <br>
                    <div>
                      <span yellow>.form__button</span> {
                      <div class="border-left">
                        <div recuo>width: <span green>100%</span>;</div>
                      </div>
                      }
                    </div>
                    <br>
                    <div>
                      <span yellow>.fale-conosco</span> {
                      <div class="border-left">
                        <div recuo>
                          position: <span brown>absolute</span>;<br>
                          bottom: <span green>10vh</span>;<br>
                          margin: <span brown>auto</span>;
                        </div>
                      </div>
                      }
                    </div>
                    <br>
                    <div>
                      <span roxo>@media</span> only <span brown>screen</span> and (max-width: <span green>1050px</span>) {
                      <div class="border-left">
                        <div recuo>
                          <span yellow>.grafismo__dm</span> { <br>
                          height: <span green>70px</span>;<br>
                          transform: <span yellow>translatex</span>(<span green>0</span>); <br>
                          }
                        </div>
                      </div>
                      }
                    </div>

                  </div>
                </div>
                &#60;/<span tagColor>style</span>&#62;
              </div>
            </el-collapse-item>
          </el-collapse>



        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../components/HeaderDs.vue";

export default {
  name: "LoginDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Login",
    };
  },
};
</script>

<style scoped>
.cont-elements--login {
  height: 1000px;
  width: 800px;
  overflow: auto;
}

.overflow {
  display: block;
  width: 1000px;
}
</style>


<style>
.grafismo {
  position: relative;
  width: 100%;
  height: 100vh;
}

.grafismo-cont {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.grafismo-cont__img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.grafismo__protagonizar {
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  bottom: 30px;
  top: 0;
  width: 100%;
  height: 100vh;
}

.grafismo__content {
  position: absolute;
  width: max-content;
  margin-left: 5%;
  top: 65vh;
}

.grafismo__title {
  background-color: var(--dm_creme_02);
  padding: 18px;
  font-weight: 500;
  color: var(--dm_preto_00);
  width: max-content;
}

.grafismo__dm {
  height: 70px;
  transform: translatex(305px);
}

.form-container {
  background: var(--dm_creme_02);
  display: flex;
  align-items: center;
  justify-content: center;
}

.form__button {
  width: 100%;
}

.fale-conosco {
  position: absolute;
  bottom: 10vh;
  margin: auto;
}

@media only screen and (max-width: 1050px) {
  .grafismo__dm {
    height: 70px;
    transform: translatex(0);
  }
}
</style>