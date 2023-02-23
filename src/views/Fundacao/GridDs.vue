<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
     
      <el-main>
        <div>
          <h1>/Grid</h1>
          <hr />
          <br />
          <p>
            São os layouts de utilização de espaço nas telas para facilitar a
            construção de interfaces. Os grids responsivos sofrem adaptações
            dependendo do tamanho da tela do usuário, para que o conteúdo se
            adapte para tamanhos diferentes. Entretanto até o momento só
            disponibilizamos estudos de grid para interfaces do tipo desktop.
          </p>
        </div>
        <br />
        <div class="container-elementos">
          <el-row class="colunas">
            <el-row>
              <h3>Colunas</h3>
            </el-row>
            <el-row>
              <el-col :span="18">
                <br />
                <p>
                  Os elementos são distribuídos dentro de uma grade responsiva
                  de 24 colunas usadas no sistema construtivo de todas as
                  páginas.
                </p>
              </el-col>
              <el-col :offset="1" :span="5">
                <img class="colunas__img" src="grid/grid.svg" alt="" />
              </el-col>
            </el-row>
          </el-row>
        </div>
        <div class="container-elementos">
          <el-row class="colunas">
            <h3>Gaps</h3>
            <br />
            <br />
            <el-row>
              <el-col :span="18">
                <p>
                  Os gaps são as distâncias entre as colunas. Eles tem valores
                  fixos, mas que variam de acordo com a tela do usuário. Em
                  telas menores, o gap é menor, deixando os elementos mais
                  próximos, em telas maiores o gap é maior, deixando os
                  elementos mais distante. Isso faz com que os elementos da
                  interface ocupem melhor o espaço disponível. O que determina o
                  tamanho do gap são os chamados “breakpoints” ou pontos de
                  quebra, onde há uma determinação para mudança do tamanho do
                  gap de acordo com a mudança na resolução da tela. O design
                  system da Data Machina utiliza um breakpoint que divide telas
                  de até 1280px, e telas superiores a 1280px.
                </p>
              </el-col>
              <el-col :offset="1" :span="5">
                <img class="colunas__img" src="grid/gap.svg" alt="" />
              </el-col>
            </el-row>
          </el-row>
        </div>
        <el-table :data="tableData" stripe >
          <el-table-column prop="largura" width="100" label="Largura" />
          <el-table-column prop="colunas" width="100" label="Colunas" />
          <el-table-column prop="gap" width="100" label="Gap" />
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "GridDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Grid",
      tableData: [{ largura: "1080px", colunas: "24", gap: "10px" }],
    };
  },
};
</script>

<style scoped>
.colunas__img {
  width: 100%;
}
</style>
