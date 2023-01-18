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
          <h1>/login</h1>
          <hr />
          <br />
          <p>Tela de login.</p>
        </div>
        <br />
        <div class="container-elementos">
          <div class="container-elementos--login">
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
                          <el-button type="primario" class="form__button"
                            >Entrar</el-button
                          >
                        </el-form-item>

                        <el-button type="terciario"
                          >Esqueceu a senha?</el-button
                        >
                      </el-form>

                      <p class="fale-conosco">
                        <span style="color: var(--dm_azul_00)">/</span>fale
                        conosco: <u>contato@datamachina.com.br</u>
                      </p>
                    </el-col>
                  </el-col>

                  <el-col :span="12" class="grafismo">
                    <div class="grafismo-cont">
                      <img
                        class="grafismo-cont__img"
                        src="login-grafismo.jpg"
                        alt="background"
                      />
                    </div>
                    <div class="grafismo__protagonizar">
                      <div class="grafismo__content">
                        <h3 class="grafismo__title">
                          <span style="color: var(--dm_azul_00)">/</span
                          >Protagonizar a mudança!
                        </h3>
                        <img
                          class="grafismo__dm"
                          src="dm_login.svg"
                          alt="Data Machina"
                        />
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
            <el-collapse-item title="ver" name="3">
              <div class="html_codigos_blue">
                &#60;<span tagColor>div</span>&#62;
                <div class="border-left">
                  <div recuo>
                    &#60;<span tagColor>el-row</span>&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>el-col</span> :span=<span roxo
                          >"12"</span
                        >
                        class=<span roxo>"form-container"</span>&#62;
                        <div class="border-left">
                          <div recuo>
                            &#60;<span tagColor>el-col</span> :span=<span roxo
                              >"16"</span
                            >&#62;
                            <div class="border-left">
                              <div recuo>
                                &#60;<span tagColor>el-form</span>&#62;
                                <div class="border-left">
                                  <div recuo>
                                    &#60;<span tagColor>h1</span>&#62;&#60;<span
                                      tagColor
                                      >span</span
                                    >
                                    style=<span roxo
                                      >"color: var(--dm_azul_00)"</span
                                    >&#62;<span black>/</span>&#60;/<span
                                      tagColor
                                      >span</span
                                    >&#62;<span black>Login</span>&#60;/<span
                                      tagColor
                                      >h1</span
                                    >&#62;
                                    <br />
                                    &#60;<span tagColor>br</span> /&#62;
                                  </div>
                                  <!-- Email -->
                                  <div recuo>
                                    <span green>&#60;!-- Email --&#62;</span>
                                    <br />
                                    &#60;<span tagColor>el-form-item</span>&#62;
                                    <div recuo>
                                      &#60;<span tagColor>el-input</span>
                                      type=<span roxo>"text"</span>
                                      placeholder=<span roxo>"E-mail"</span>
                                      /&#62;
                                    </div>
                                    &#60;/<span tagColor>el-form-item</span
                                    >&#62;
                                  </div>
                                  <!-- Senha -->
                                  <div recuo>
                                    <br />
                                    <span green>&#60;!-- Senha --&#62;</span>
                                    <br />
                                    &#60;<span tagColor>el-form-item</span>&#62;
                                    <div recuo>
                                      &#60;<span tagColor>el-input</span>
                                      type=<span roxo>"password"</span>
                                      placeholder=<span roxo>"Senha"</span>
                                      /&#62;
                                    </div>
                                    &#60;/<span tagColor>el-form-item</span
                                    >&#62;
                                  </div>
                                  <!-- Entrar -->
                                  <div recuo>
                                    <br />
                                    <span green>&#60;!-- Entrar --&#62;</span>
                                    <br />
                                    &#60;<span tagColor>el-form-item</span>&#62;
                                    <div recuo>
                                      &#60;<span tagColor>el-button</span>
                                      type=<span roxo>"primario"</span>
                                      class=<span roxo>"form__button"</span
                                      >&#62;<span black>Entrar</span>&#60;/<span
                                        tagColor
                                        >el-button</span
                                      >&#62;
                                    </div>
                                    &#60;/<span tagColor>el-form-item</span
                                    >&#62;
                                    <!-- button -->
                                    <br />
                                    <br />
                                    <span green>&#60;!-- Button --&#62;</span>
                                    <br />
                                    &#60;<span tagColor>el-button</span>
                                    type=<span roxo>"terciario"</span>&#62;<span
                                      black
                                      >Esqueceu a senha?</span
                                    >&#60;/<span tagColor>el-button</span>&#62;
                                  </div>
                                </div>
                                &#60;/<span tagColor>el-form</span>&#62;
                                <br />
                                &#60;<span tagColor>p</span> class=<span roxo
                                  >"fale-conosco"</span
                                >&#62;
                                <div recuo>
                                  &#60;<span tagColor>span</span> style=<span
                                    roxo
                                    >"color: var(--dm_azul_00)"</span
                                  >&#62;<span black>/</span>&#60;/<span tagColor
                                    >span</span
                                  >&#62;<span black>fale conosco: </span>
                                  &#60;<span tagColor>u</span>&#62;<span black
                                    >contato@datamachina.com.br</span
                                  >&#60;/<span tagColor>u</span>&#62;
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
                        &#60;<span tagColor>el-col</span> :span=<span roxo
                          >"12"</span
                        >
                        class=<span roxo>"grafismo"</span>&#62;
                        <br />

                        <div recuo>
                          &#60;<span tagColor>div</span> class=<span roxo
                            >"grafismo-cont"</span
                          >&#62;
                          <div recuo>
                            &#60;<span tagColor>img</span> class=<span roxo
                              >"grafismo-cont__img"</span
                            >
                            src=<span roxo>"login-grafismo.jpg"</span> alt=<span
                              roxo
                              >"background"</span
                            >
                            /&#62;
                          </div>
                          &#60;/<span tagColor>div</span>&#62;
                        </div>
                        <div recuo>
                          &#60;<span tagColor>div</span> class=<span roxo
                            >"grafismo__protagonizar"</span
                          >&#62;
                          <div recuo>
                            &#60;<span tagColor>div</span> class=<span roxo
                              >"grafismo__content"</span
                            >&#62;
                            <br />
                            <div recuo>
                              &#60;<span tagColor>h3</span> class=<span roxo
                                >"grafismo__title"</span
                              >&#62;&#60;<span tagColor>span</span> style=<span
                                roxo
                                >"color: var(--dm_azul_00)"</span
                              >&#62;/&#60;/<span tagColor>span</span>&#62;<span
                                black
                                >Protagonizar a mudança!</span
                              >&#60;/<span tagColor>h3</span>&#62;
                              <br />
                              &#60;<span tagColor>img</span> class=<span roxo
                                >"grafismo__dm"</span
                              >
                              src=<span roxo>"dm_login.svg"</span> alt=<span
                                roxo
                                >"Data Machina"</span
                              >
                              /&#62;
                            </div>
                            &#60;/<span tagColor>div</span>&#62;
                          </div>
                          &#60;/<span tagColor>div</span>&#62;
                        </div>

                        &#60;/<span tagColor>el-col</span>&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>el-row</span>&#62;
                  </div>
                </div>
                &#60;/<span tagColor>div</span>&#62;
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
  name: "LoginDs",
  components: {
    AsideComponent,
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
.container-elementos--login {
  height: 1000px;
  width: 800px;
  overflow: auto;
}
.overflow {
  display: block;
  width: 1000px;
}
</style>
