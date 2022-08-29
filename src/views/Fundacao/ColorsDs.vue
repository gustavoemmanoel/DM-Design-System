<template>
  <div>
    <el-row>
      <el-col :span="4"><AsideComponent /></el-col>
      <div id="ancora">teste</div>
      <el-col class="container" :span="16">
        <div
          style="margin: 0 0 20px 0"
          v-for="(userConditions, index) in colors"
          :key="index"
        >
          <div style="margin: 0 0 20px 0">
            <h1>/{{ userConditions.title }}</h1>

            <div class="hr" />
          </div>
          <div>
            <div class="container-elementos">
              <p class="title-squad">{{ userConditions.classification }}</p>
              <div class="grid-colors">
                <div
                  class="container-color"
                  v-for="(coresDs, index) in userConditions.cores"
                  :key="index"
                >
                  <p class="token">{{ coresDs.token }}</p>

                  <div class="cont-color">
                    <p class="HEX">{{ coresDs.hex }}</p>
                  </div>
                  <div class="color-squad" :class="coresDs.token"></div>
                  <p class="casodeuso">{{ coresDs.casodeuso }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col class="sub-nav" :span="5">
        <p>Cores principais da marca</p>
        <p>Tons pretos</p>
        <p>Tons creme</p>
        <p>Cores secundárias da marca</p>
        <p>Sub tons de cores da marca</p>
        <p>Cores de contraste</p>
        <p>Cores semânticas</p>
        <p>Paleta de uso em mapa</p>
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
  data() {
    return {
      colors: [
        {
          title: "Cores",
          classification: "Predominantes em todas as interfaces",
          cores: [
            {
              token: "dm_azul_00",
              hex: "#0567FF",
              casodeuso: "contraste",
            },
            {
              token: "dm_preto_00",
              hex: "#2C2C2C",
              casodeuso: "textos",
            },
            {
              token: "dm_creme_00",
              hex: "#FDFBF9",
              casodeuso: "fundo",
            },
          ],
        },
        {
          title: "Tons pretos",
          classification: "Variações do #2C2C2C",
          cores: [
            {
              token: "dm_preto_00",
              hex: "#2C2C2C",
              casodeuso: "textos",
            },
            {
              token: "dm_cinza_01",
              hex: "#606060",
              casodeuso: "",
            },
            {
              token: "dm_cinza_02",
              hex: "#959595",
              casodeuso: "bordas de cards",
            },
            {
              token: "dm_cinza_03",
              hex: "#CACACA",
              casodeuso: "",
            },
            {
              token: "dm_cinza_04",
              hex: "#F0F0F0",
              casodeuso: "preenchimentos",
            },
            {
              token: "dm_cinza_05",
              hex: "#F1F1F1",
              casodeuso: "",
            },
          ],
        },
        {
          title: "Tons creme",
          classification: "Estabelecidas no manual da marca",
          cores: [
            {
              token: "dm_creme_01",
              hex: "#FDFBF9",
              casodeuso: "fundo principal textos",
            },
            {
              token: "dm_creme_02",
              hex: "#EFECE6",
              casodeuso: "destaques dentro de fundo secundário",
            },
            {
              token: "dm_creme_03",
              hex: "#FAF6F0",
              casodeuso: "fundo secundário",
            },
          ],
        },
        {
          title: "Cores secundárias da marca",
          classification: "Utilizadas para contraste e em variações de paleta",
          cores: [
            {
              token: "dm_lilas_00",
              hex: "#9E6CFF",
            },
            {
              token: "dm_rosa_00",
              hex: "#F45197",
            },
            {
              token: "dm_verde_00",
              hex: "#3E9A00",
            },
            {
              token: "dm_laranja_00",
              hex: "#F25900",
            },
            {
              token: "dm_amarelo_00",
              hex: "#FFA400",
            },
          ],
        },
        {
          title: "Sub tons de cores da marca",
          classification: "Usadas em hover e tags",
          cores: [
            {
              token: "dm_azul_01",
              hex: "#448DFF",
            },
            {
              token: "dm_lilas_01",
              hex: "#B691FF",
            },
            {
              token: "dm_rosa_01",
              hex: "#F77CB1",
            },
            {
              token: "dm_verde_01",
              hex: "#6EB340",
            },
            {
              token: "dm_laranja_01",
              hex: "#F58340",
            },
            {
              token: "dm_amarelo_01",
              hex: "#FFBB40",
            },
            /*  */
            {
              token: "dm_azul_02",
              hex: "#82B3FF",
            },
            {
              token: "dm_lilas_02",
              hex: "#CFB6FF",
            },
            {
              token: "dm_rosa_02",
              hex: "#FF99AA",
            },
            {
              token: "dm_verde_02",
              hex: "#9FCD80",
            },
            {
              token: "dm_laranja_02",
              hex: "#F9AC80",
            },
            {
              token: "dm_amarelo_02",
              hex: "#FFD280",
            },
            /*  */
            {
              token: "dm_azul_03",
              hex: "#C1D9FF",
            },
            {
              token: "dm_lilas_03",
              hex: "#E7DAFF",
            },
            {
              token: "dm_rosa_03",
              hex: "#FCD3E5",
            },
            {
              token: "dm_verde_03",
              hex: "#CFE6BF",
            },
            {
              token: "dm_laranja_03",
              hex: "#FCD5BF",
            },
            {
              token: "dm_amarelo_03",
              hex: "#FFE8BF",
            },
          ],
        },
        {
          title: "Cores semânticas",
          classification:
            "Cores usadas para representar estados e significados",
          cores: [
            {
              token: "dm_azul_00",
              hex: "#0567FF",
              casodeuso: "ativos",
            },
            {
              token: "dm_verde_00",
              hex: "#3E9A00",
              casodeuso: "respostas positivas",
            },
            {
              token: "dm_vermelho_00",
              hex: "#E2381B",
              casodeuso: "respostas negativas",
            },
            {
              token: "dm_amarelo_00",
              hex: "#FFA400",
              casodeuso: "alertas",
            },
            {
              token: "dm_rosa_00",
              hex: "#F45197",
              casodeuso: "avisos e focus",
            },
          ],
        },
        {
          title: "Paleta de uso em mapa",
          classification: "Pins, vetores de áreas e vetores de linhas. ",
          cores: [
            {
              token: "dm_laranja_C01",
              hex: "#F25900",
            },
            {
              token: "dm_amarelo_C01",
              hex: "#FFA400",
            },
            {
              token: "dm_rosa_C01",
              hex: "#F45197",
            },
            {
              token: "dm_roxo_C01",
              hex: "#9E6CFF",
            },
            {
              token: "dm_verde_C01",
              hex: "#3E9A00",
            },
            {
              token: "dm_azul_C01",
              hex: "#002B99",
            },
            /*  */
            {
              token: "dm_laranja_C02",
              hex: "#FF8C67",
            },
            {
              token: "dm_amarelo_C02",
              hex: "#FFCB3F",
            },
            {
              token: "dm_rosa_C02",
              hex: "#DB129B",
            },
            {
              token: "dm_roxo_C02",
              hex: "#7445EB",
            },
            {
              token: "dm_verde_C02",
              hex: "#2BDE02",
            },
            {
              token: "dm_azul_C02",
              hex: "#3EB3DE",
            },
            /*  */
            {
              token: "dm_laranja_C03",
              hex: "#FF3419",
            },
            {
              token: "dm_amarelo_C03",
              hex: "#F1E80C",
            },
            {
              token: "dm_rosa_C03",
              hex: "#FA0060",
            },
            {
              token: "dm_roxo_C03",
              hex: "#68008C",
            },
            {
              token: "dm_verde_C03",
              hex: "#09D188",
            },
            {
              token: "dm_azul_C03",
              hex: "#007D99",
            },
            /*  */
            {
              token: "dm_laranja_C04",
              hex: "#FF9745",
            },
            {
              token: "dm_amarelo_C04",
              hex: "#D5EC25",
            },
            {
              token: "dm_rosa_C04",
              hex: "#EB5FE1",
            },
            {
              token: "dm_roxo_C04",
              hex: "#AF52E6",
            },
            {
              token: "dm_verde_C04",
              hex: "#5FFC96",
            },
            {
              token: "dm_azul_C04",
              hex: "#02DEDA",
            },
          ],
        },
      ],
    };
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
  background: var(--dm_cinza_04);
  height: 1px;
  width: 100%;
}

/* Cores */

.grid-colors {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0 35px;
  margin: 10px 0;
}

.container-elementos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* background: #efece6; */
  border-radius: 6px;
  padding: 20px;
  width: max-content;
  height: max-content;
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

.token {
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
  width: 110px;
  text-align: center;
  color: #606060;
}

.color-squad {
  width: 100px;
  height: 100px;
  border-radius: 6px;
}

/*  */

.sub-nav {
  position: fixed;
  margin-top: 35px;
  top: 75px;
  right: 40px;
}
.sub-nav p {
  margin-bottom: 6px;
  font-size: 12px;
  color: var(--dm_preto_00);
  transition: 0.2s;
  cursor: pointer;
}

.sub-nav p:hover {
  color: var(--dm_cinza_02);
  text-decoration: underline;
  transition: 0.2s;
}
</style>