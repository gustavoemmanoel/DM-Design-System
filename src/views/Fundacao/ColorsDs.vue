<template>
  <div>
    <el-row>
      <el-col :span="4"><AsideComponent /></el-col>

      <el-col class="container" :span="20">
        <h1>/Cores</h1>
        <div class="hr" />
        <h1 class="h1-title">Cores principais da marca</h1>

        <!--  -->
        <div class="container-elementos">
          <p class="title-squad">Predominantes em todas as interfaces</p>
          <div style="display: flex; gap: 35px; margin: 10px 0">
            <div class="container-color">
              <div class="cont-color">
                <p class="tag">dm_azul_00</p>
                <p class="HEX">#0567FF</p>
              </div>
              <div class="color-squad dm_azul_00"></div>
              <p class="casodeuso" id="vais">contraste</p>
            </div>

            <div class="container-color">
              <div class="cont-color">
                <p class="tag">dm_preto_00</p>
                <p class="HEX">#2C2C2C</p>
              </div>
              <div class="color-squad dm_preto_00"></div>
              <p class="casodeuso">textos</p>
            </div>

            <div class="container-color">
              <div class="cont-color">
                <p class="tag">dm_creme_00</p>
                <p class="HEX">#FDFBF9</p>
              </div>
              <div class="color-squad dm_creme_00"></div>
              <p class="casodeuso">fundo</p>
            </div>
          </div>
        </div>
        <!--  -->
        <h1 class="h1-title">Tons pretos</h1>
        <!-- DERIVANTES DO CINZA -->
        <div class="container-elementos">
          <p class="title-squad">Variações do #2C2C2C</p>
          <div style="display: flex; gap: 35px; margin: 10px 0">
            <!--  -->
            <div class="container-color">
              <div class="cont-color">
                <p class="tag">dm_preto_00</p>
                <p class="HEX">#2C2C2C</p>
              </div>
              <div class="color-squad dm_preto_00"></div>
              <p class="casodeuso">textos</p>
            </div>

            <!-- -->
            <div class="container-color">
              <div class="cont-color">
                <p class="tag">dm_preto_01</p>
                <p class="HEX">#2C2C2C</p>
              </div>
              <div class="color-squad dm_cinza_01"></div>
            </div>

            <!-- -->
            <div class="container-color">
              <div class="cont-color">
                <p class="tag">dm_creme_02</p>
                <p class="HEX">#FDFBF9</p>
              </div>
              <div class="color-squad dm_cinza_02"></div>
              <p class="casodeuso">bordas de cards</p>
            </div>
            <!-- -->
            <div class="container-color">
              <div class="cont-color">
                <p class="tag">dm_creme_03</p>
                <p class="HEX">#FDFBF9</p>
              </div>
              <div class="color-squad dm_cinza_03"></div>
            </div>
            <!-- -->
            <div class="container-color">
              <div class="cont-color">
                <p class="tag">dm_creme_04</p>
                <p class="HEX">#FDFBF9</p>
              </div>
              <div class="color-squad dm_cinza_04"></div>
              <p class="casodeuso">preenchimentos</p>
            </div>
            <!-- -->
            <div class="container-color">
              <div class="cont-color">
                <p class="tag">dm_creme_05</p>
                <p class="HEX">#FDFBF9</p>
              </div>
              <div class="color-squad dm_cinza_05"></div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
export default {
  name: "ColorsDs",
  components: {
    AsideComponent,
  },
};
</script>

<style scoped>
* {
  color: #2c2c2c;
}

.container {
  padding: 25px;
}

h1 {
  font-size: 24px;
  color: #2c2c2c;
  font-weight: 500;
  font-family: "Roboto Slab", serif;
}

.h1-title {
  margin: 15px 0;
}

.hr {
  background: #cacaca;
  height: 1px;
  width: 100%;
}

/* Cores */

.container-elementos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #efece6;
  border-radius: 6px;
  padding: 20px;
  width: max-content;
  height: 250px;
}

.title-squad {
  font-weight: 400;
  font-size: 16px;
}

.container-color {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  gap: 5px;
}

.cont-color {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tag {
  font-size: 14px;
  font-weight: 400;
  color: #2c2c2c;
}
.HEX {
  font-size: 12px;
  font-weight: 400;
  color: #606060;
}

.casodeuso {
  font-size: 12px;
  font-weight: 300;
  color: #606060;
}

.color-squad {
  width: 100px;
  height: 100px;
  border-radius: 6px;
}
/*  */
.dm_azul_00 {
  background: #0567ff;
}

.dm_preto_00 {
  background: #2c2c2c;
}

.dm_creme_00 {
  background: #fdfbf9;
}
/*  */

.dm_cinza_01 {
  background: #606060;
}
.dm_cinza_02 {
  background: #959595;
}
.dm_cinza_03 {
  background: #cacaca;
}
.dm_cinza_04 {
  background: #f0f0f0;
}
.dm_cinza_05 {
  background: #f1f1f1;
}
</style>