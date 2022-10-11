<template>
  <div>
    <el-row>
      <el-col :span="24">
        <HeaderDs :headerTitle="headerTitle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><AsideComponent :btnAtivo="btnAtivo" /></el-col>
      <el-col :offset="1" :span="18">
        <br>
        <br>
        <div
          class="containerInterno"
          v-for="(userConditions, index) in colors"
          :key="index"
        >
          <div class="container_title">
            <h1>{{ userConditions.title }}</h1>
            <div class="hr" />
          </div>
          <div>
            <div class="container-elementos">
              <p class="title-squad">
                {{ userConditions.classification }}
              </p>
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
                  <div
                    class="color-squad"
                    :style="userConditions.border"
                    :class="coresDs.token"
                  ></div>
                  <p class="casodeuso">{{ coresDs.casodeuso }}</p>
                </div>
              </div>
              <div style="display: flex; gap: 30px">
                <div
                  class="contMap"
                  v-for="(mapsExp, index) in userConditions.img"
                  :key="index"
                >
                  <p style="height: 65px">{{ mapsExp.topDescription }}</p>
                  <img :src="mapsExp.map" />
                  <p>{{ mapsExp.descriptionMap }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "ColorsDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Cores",
      btnAtivo: { cores: "text-decoration: underline" },
      colors: [
        {
          title: "/Cores",
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
          title: "/Tons pretos",
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
          title: "/Tons creme",
          classification: "Estabelecidas no manual da marca",
          border: "border: 1px solid var(--dm_cinza_04)",
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
          title: "/Cores secundárias da marca",
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
          title: "/Sub tons de cores da marca",
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
          title: "/Cores de contraste",
          classification: "Pins, vetores de áreas e vetores de linhas. ",
          cores: [
            {
              token: "dm_azul_CT01",
              hex: "#184995",
            },
            {
              token: "dm_lilas_CT01",
              hex: "#654C95",
            },
            {
              token: "dm_rosa_CT01",
              hex: "#903E61",
            },
            {
              token: "dm_verde_CT01",
              hex: "#356316",
            },
            {
              token: "dm_laranja_CT01",
              hex: "#8F4216",
            },
            {
              token: "dm_amarelo_CT01",
              hex: "#956816",
            },
            {
              token: "dm_cinza_CT01",
              hex: "#808080",
            },
          ],
        },
        {
          title: "/Cores semânticas",
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
          title: "/Paleta de uso em mapa",
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
          img: [
            {
              topDescription:
                "Utilização das 6 cores da cartela 1. A utilização de mais cores deve seguir a sequência de cor da próxima cartela.",
              map: "/assets/rotas01.jpg",
              descriptionMap: "Frame da tela de rotas de logistica.",
            },
            {
              topDescription:
                "Utilização das 4 cartelas de cor - total de 24 cores.",
              map: "/assets/rotas02.jpg",
              descriptionMap: "Frame da tela de rotas de logistica.",
            },
          ],
        },

        {
          classification:
            "Vetor de áreas para utilizações do tipo clusters. Quando há diferenciação qualitativa entre os elementos. Pode ser aplicada transparência de camadas.",
          cores: [
            {
              token: "dm_azul_00",
              hex: "#0567FF",
            },
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
          classification:
            "Vetor de áreas para utilizações onde há uma diferenciação quantitativa entre os elementos. Onde está mais escuro representa números maiores, e onde está mais claro números mais discretos.",
          cores: [
            {
              token: "dm_azul_00",
              hex: "#0567FF",
            },
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
          img: [
            {
              map: "/assets/map1.0.jpg",
              descriptionMap: "Sem transparência",
            },
            {
              map: "/assets/map1.1.jpg",
              descriptionMap: "Com transparência",
            },
          ],
        },
        {
          classification:
            "Vetor de áreas para utilizações onde há uma diferenciação quantitativa entre os elementos. Onde está mais escuro representa números maiores, e onde está mais claro números mais discretos.",
          cores: [
            {
              token: "dm_rosa1_C05",
              hex: "#FEEBE2",
            },
            {
              token: "dm_rosa2_C05",
              hex: "#FCC5C0",
            },
            {
              token: "dm_rosa3_C05",
              hex: "#FA9FB5",
            },
            {
              token: "dm_rosa4_C05",
              hex: "#F768A1",
            },
            {
              token: "dm_rosa5_C05",
              hex: "#C51B8A",
            },
            {
              token: "dm_rosa6_C05",
              hex: "#7A0177",
            },
          ],
          img: [
            {
              map: "/assets/map2.0.jpg",
              descriptionMap: "Sem transparência",
            },
            {
              map: "/assets/map2.1.jpg",
              descriptionMap: "Com transparência",
            },
          ],
        },
        {
          classification:
            "Vetor de áreas para utilizações onde há uma diferenciação quantitativa entre os elementos. Onde está mais escuro representa números maiores, e onde está mais claro números mais discretos.",
          cores: [
            {
              token: "dm_verde1_C06",
              hex: "#EDF8FB",
            },
            {
              token: "dm_verde2_C06",
              hex: "#CEF3EC",
            },
            {
              token: "dm_verde3_C06",
              hex: "#99D8C9",
            },
            {
              token: "dm_verde4_C06",
              hex: "#66C2A4",
            },
            {
              token: "dm_verde5_C06",
              hex: "#2CA25F",
            },
            {
              token: "dm_verde6_C06",
              hex: "#006D2C",
            },
          ],
          img: [
            {
              map: "/assets/map3.0.jpg",
              descriptionMap: "Sem transparência",
            },
            {
              map: "/assets/map3.1.jpg",
              descriptionMap: "Com transparência",
            },
          ],
        },
        {
          classification:
            "Vetor de áreas para utilizações onde há uma diferenciação quantitativa entre os elementos. Onde está mais escuro representa números maiores, e onde está mais claro números mais discretos.",
          cores: [
            {
              token: "dm_laranja1_C07",
              hex: "#FEEDDE",
            },
            {
              token: "dm_laranja2_C07",
              hex: "#FDD0A2",
            },
            {
              token: "dm_laranja3_C07",
              hex: "#FDAE6B",
            },
            {
              token: "dm_laranja4_C07",
              hex: "#FD8D3C",
            },
            {
              token: "dm_laranja5_C07",
              hex: "#E6550D",
            },
            {
              token: "dm_laranja6_C07",
              hex: "#A63603",
            },
          ],
          img: [
            {
              map: "/assets/map4.0.jpg",
              descriptionMap: "Sem transparência",
            },
            {
              map: "/assets/map4.1.jpg",
              descriptionMap: "Com transparência",
            },
          ],
        },
        {
          classification:
            "Vetor de áreas para utilizações onde há uma diferenciação quantitativa entre os elementos. Onde está mais escuro representa números maiores, e onde está mais claro números mais discretos.",
          cores: [
            {
              token: "dm_azul1_C08",
              hex: "#EFF3FF",
            },
            {
              token: "dm_azul2_C08",
              hex: "#C6DFF8",
            },
            {
              token: "dm_azul3_C08",
              hex: "#9ECAE1",
            },
            {
              token: "dm_azul4_C08",
              hex: "#6BAED6",
            },
            {
              token: "dm_azul5_C08",
              hex: "#3182BD",
            },
            {
              token: "dm_azul6_C08",
              hex: "#08519C",
            },
          ],
          img: [
            {
              map: "/assets/map5.0.jpg",
              descriptionMap: "Sem transparência",
            },
            {
              map: "/assets/map5.1.jpg",
              descriptionMap: "Com transparência",
            },
          ],
        },
        {
          classification:
            "Vetor de áreas para utilizações onde há uma diferenciação quantitativa entre os elementos. Onde está mais escuro representa números maiores, e onde está mais claro números mais discretos.",
          cores: [
            {
              token: "dm_areia_C09",
              hex: "#E0BA88",
            },
            {
              token: "dm_turquesa_C09",
              hex: "#289DA3",
            },
          ],
          img: [
            {
              map: "/assets/map6.0.jpg",
              descriptionMap: "Sem transparência",
            },
            {
              map: "/assets/map6.1.jpg",
              descriptionMap: "Com transparência",
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

.h1-title {
  margin: 15px 0;
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
  border-radius: 6px;
  padding: 20px;
  background: var(--dm_creme_01);
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

.contMap {
  width: 300px;
}

.contMap img {
  height: 220px;
  object-fit: cover;
}
</style>
