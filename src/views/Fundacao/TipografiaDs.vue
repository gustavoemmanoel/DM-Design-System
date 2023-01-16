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
        <div v-for="(tableContent, index) in table" :key="index">
          <div>
            <div>
              <h1>{{ tableContent.row[0].title }}</h1>
              <hr />
            </div>
            <br />
            <table class="container-elementos">
              <tr class="title-table h4">
                <td>Categoria</td>
                <td>Fonte</td>
                <td>Peso</td>
                <td>Tamanho</td>
                <td>Token</td>
                <td>Exemplo</td>
              </tr>
              <tr v-for="(brabo, index) in tableContent.row" :key="index">
                <td :class="brabo.token">
                  {{ brabo.categoria }}
                </td>
                <td>{{ brabo.roboto }}</td>
                <td>{{ brabo.peso }}</td>
                <td>{{ brabo.pixel }}</td>
                <td>{{ brabo.token }}</td>
                <td :class="brabo.token">
                  {{ brabo.exemplo }}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";
export default {
  name: "TipografiaDs",
  components: { AsideComponent, HeaderDs },
  data() {
    return {
      headerTitle: "Tipografia",
      btnAtivo: { tipografia: "text-decoration: underline" },
      table: [
        {
          row: [
            { title: "/Título (Heading)" },
            {
              categoria: "Título H1",
              roboto: "Roboto Slab",
              peso: "Medium",
              pixel: "28px",
              token: "header_h1",
              exemplo: "Olá, mundo!",
            },
            {
              categoria: "Título H2",
              roboto: "Roboto Slab",
              peso: "Medium",
              pixel: "24px",
              token: "header_h2",
              exemplo: "Olá, mundo!",
            },
            {
              categoria: "Título H3",
              roboto: "Roboto Slab",
              peso: "Medium",
              pixel: "22px",
              token: "header_h3",
              exemplo: "Olá, mundo!",
            },
            {
              categoria: "Título H4",
              roboto: "Roboto Slab",
              peso: "Medium",
              pixel: "20px",
              token: "header_h4",
              exemplo: "Olá, mundo!",
            },
            {
              categoria: "Título H5",
              roboto: "Roboto",
              peso: "Bold",
              pixel: "18px",
              token: "header_h5",
              exemplo: "Olá, mundo!",
            },
            {
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
              categoria: "Corpo 01",
              roboto: "Roboto",
              peso: "Medium",
              pixel: "20px",
              token: "body_01",
              exemplo: "Problemas difíceis",
            },
            {
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
              categoria: "Corpo 04",
              roboto: "Roboto",
              peso: "Medium",
              pixel: "14px",
              token: "body_04",
              exemplo: "Problemas difíceis",
            },
            {
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
              categoria: "Detalhe 01",
              roboto: "Roboto",
              peso: "Light",
              pixel: "16px",
              token: "detail_01",
              exemplo: "Senha inválida",
            },
            {
              categoria: "Detalhe 01",
              roboto: "Roboto",
              peso: "Light",
              pixel: "14px",
              token: "detail_02",
              exemplo: "Senha inválida",
            },
            {
              categoria: "Detalhe 01",
              roboto: "Roboto",
              peso: "Light",
              pixel: "12px",
              token: "detail_03",
              exemplo: "Senha inválida",
            },
            {
              categoria: "Detalhe 01",
              roboto: "Roboto",
              peso: "Light",
              pixel: "10px",
              token: "detail_04",
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
  padding: 10px 0;
  /* height: 40px; */
}
</style>
