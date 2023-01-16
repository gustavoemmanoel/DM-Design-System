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
          <p>xxx.</p>
        </div>
        <br />
        <div class="container-elementos container-elementos--login">
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
                      <el-button type="terciario">Esqueceu a senha?</el-button>
                    </el-form>
                    <p class="fale-conosco">
                      <span style="color: var(--dm_azul_00)">/</span>fale conosco:
                      <u>contato@datamachina.com.br</u>
                    </p>
                  </el-col>
                </el-col>
                <el-col :span="12" class="grafismo">
                  <img class="grafismo__background" src="login.jpg" />
                  <div class="grafismo__protagonizar">
                    <div class="grafismo__content">
                      <h3 class="grafismo__title">
                        <span style="color: var(--dm_azul_00)">/</span
                        >Protagonizar a mudança!
                      </h3>
                      <img class="grafismo__dm" src="dm_login.svg" />
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-dialog
                v-model="restorePasswordDialog"
                title="Recuperação de senha"
                width="600px"
              >
                <p>Por favor, digite o e-mail de sua conta.</p>
                <el-input style="width: 70%" type="text" />
                <template #footer>
                  <el-button type="primario">Confirm</el-button>
                </template>
              </el-dialog>
            </div>
          </span>
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
.grafismo {
  position: relative;
  width: 100%;
  height: 100vh;
}
.grafismo__background {
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  object-fit: cover;
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
/* */
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

.container-elementos--login {
  width: 800px;
  height: 70vh;
  overflow: auto;
}
.overflow{
  display: block;
  width: 1000px;
}

@media only screen and (max-width: 1050px) {
  .grafismo__dm {
    height: 70px;
    transform: translatex(0);
  }
}
</style>
