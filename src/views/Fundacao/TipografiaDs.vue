<template>
  <div>
    <el-row>
      <el-col :span="24">
        <HeaderDs :headerTitle="headerTitle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><AsideComponent :btnAtivo="btnAtivo" /></el-col>
      <el-col class="container" :span="16">
        <div class="containerInterno">
          <div
            style="margin: 0 0 20px 0"
            v-for="(tableContent, index) in table"
            :key="index"
          >
            <div>
              <div>
                <h1>{{ tableContent.row[0].title }}</h1>
                <div class="hr" />
              </div>

              <table>
                <tr class="title-table">
                  <td>
                    <h4>Categoria</h4>
                  </td>
                  <td>
                    <h4>Fonte</h4>
                  </td>
                  <td>
                    <h4>Peso</h4>
                  </td>
                  <td>
                    <h4>Tamanho</h4>
                  </td>
                  <td>
                    <h4>Token</h4>
                  </td>
                  <td>
                    <h4>Exemplo</h4>
                  </td>
                </tr>
                <tr v-for="(brabo, index) in tableContent.row" :key="index">
                  <td :style="brabo.styleH">{{ brabo.categoria }}</td>
                  <td>{{ brabo.roboto }}</td>
                  <td>{{ brabo.peso }}</td>
                  <td>{{ brabo.pixel }}</td>
                  <td>{{ brabo.token }}</td>
                  <td :style="brabo.styleH">{{ brabo.exemplo }}</td>
                </tr>
              </table>
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
  name: "TipografiaDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Tipografia",
      btnAtivo: { tipografia: "text-decoration: underline" },
      table: [
        {
          row: [
            { title: "Título (Heading)" },
            {
              styleH: "font-size: 28px; font-weight: 500",
              categoria: "Título H1",
              roboto: "Roboto Slab",
              peso: "Medium",
              pixel: "28px",
              token: "header_h1",
              exemplo: "Olá, mundo!",
            },
            {
              styleH: "font-size: 24px; font-weight: 500",
              categoria: "Título H2",
              roboto: "Roboto Slab",
              peso: "Medium",
              pixel: "24px",
              token: "header_h2",
              exemplo: "Olá, mundo!",
            },
            {
              styleH: "font-size: 22px; font-weight: 500",
              categoria: "Título H3",
              roboto: "Roboto Slab",
              peso: "Medium",
              pixel: "22px",
              token: "header_h3",
              exemplo: "Olá, mundo!",
            },
            {
              styleH: "font-size: 20px; font-weight: 500",
              categoria: "Título H4",
              roboto: "Roboto Slab",
              peso: "Medium",
              pixel: "20px",
              token: "header_h4",
              exemplo: "Olá, mundo!",
            },
            {
              styleH: "font-size: 18px; font-weight: 700",
              categoria: "Título H5",
              roboto: "Roboto",
              peso: "Bold",
              pixel: "18px",
              token: "header_h5",
              exemplo: "Olá, mundo!",
            },
            {
              styleH: "font-size: 16px; font-weight: 700",
              categoria: "Título H6",
              roboto: "Roboto",
              peso: "Bold",
              pixel: "16px",
              token: "header_h6",
              exemplo: "Olá, mundo!",
            },
          ],
        },
        {
          row: [
            { title: "Corpo (Body)" },
            {
              styleH: "font-size: 20px; font-weight: 500",
              categoria: "Corpo 01",
              roboto: "Roboto",
              peso: "Medium",
              pixel: "20px",
              token: "body_01",
              exemplo: "Problemas difíceis",
            },
            {
              styleH: "font-size: 16px; font-weight: 500",
              categoria: "Corpo 02",
              roboto: "Roboto",
              peso: "Medium",
              pixel: "16px",
              token: "body_02",
              exemplo: "Problemas difíceis",
            },
            {
              styleH: "font-size: 16px; font-weight: 500",
              categoria: "Corpo 03",
              roboto: "Roboto",
              peso: "Medium",
              pixel: "16px",
              token: "body_03",
              exemplo: "Problemas difíceis",
            },
            {
              styleH: "font-size: 14px; font-weight: 500",
              categoria: "Corpo 04",
              roboto: "Roboto",
              peso: "Medium",
              pixel: "14px",
              token: "body_04",
              exemplo: "Problemas difíceis",
            },
            {
              styleH: "font-size: 12px; font-weight: 500",
              categoria: "Corpo 05",
              roboto: "Roboto",
              peso: "Medium",
              pixel: "12px",
              token: "body_05",
              exemplo: "Problemas difíceis",
            },
          ],
        },
        {
          row: [
            { title: "Detalhe (Detail)" },
            {
              styleH: "font-size: 16px; font-weight: 300",
              categoria: "Detalhe 01",
              roboto: "Roboto",
              peso: "Light",
              pixel: "16px",
              token: "detail_01",
              exemplo: "Senha inválida",
            },
            {
              styleH: "font-size: 14px; font-weight: 300",
              categoria: "Detalhe 01",
              roboto: "Roboto",
              peso: "Light",
              pixel: "14px",
              token: "detail_01",
              exemplo: "Senha inválida",
            },
            {
              styleH: "font-size: 12px; font-weight: 300",
              categoria: "Detalhe 01",
              roboto: "Roboto",
              peso: "Light",
              pixel: "12px",
              token: "detail_01",
              exemplo: "Senha inválida",
            },
            {
              styleH: "font-size: 10px; font-weight: 300",
              categoria: "Detalhe 01",
              roboto: "Roboto",
              peso: "Light",
              pixel: "10px",
              token: "detail_01",
              exemplo: "Senha inválida",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.title-table td {
  color: #0567ff;
}
table tr td {
  padding: 10px;
}
</style>