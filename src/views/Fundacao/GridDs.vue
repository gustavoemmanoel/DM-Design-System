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
        <div class="cont-elements">
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
                <img class="colunas__img" src="grid/grid.svg" />
              </el-col>
            </el-row>
          </el-row>
        </div>
        <div class="cont-elements">
          <el-row class="colunas">
            <h3>Gaps</h3>
            <br />
            <br />
            <el-row>
              <el-col :span="14">
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
                <br>
                <el-table :data="tableData" stripe>
                  <el-table-column prop="largura" label="Largura" />
                  <el-table-column prop="colunas" label="Colunas" />
                  <el-table-column prop="gap" label="Gap" />
                </el-table>
              </el-col>
              <el-col :offset="3" :span="5">
                <img class="colunas__img" src="grid/gap.svg" alt="" />
              </el-col>
            </el-row>
          </el-row>
        </div>

        <br>
        <div class="cont-elements">
          <div class="telas-text">
            <div style="display: flex; align-items: center;">
              <p class="detail_02">A altura das colunas é definida de acordo com a altura da tela do usuário.</p>
              <span>
                <p class="detail_02">A largura das colunas é definida de acordo com a largura da tela do usuário.</p>
                <br>
                <img class="telas__first" src="grid/1.svg" />
              </span>
            </div>


            <span>
              <p class="detail_02">
                Ao contrário das colunas, os gaps entre colunas, tem um espaçamento fixo, que se alteram entre
                breakpoints conforme a tela do usuário.
              </p>
              <img class="telas__first" src="grid/1-1.svg" />
            </span>
          </div>
        </div>

        <h1>/Exemplos aplicados</h1>
        <hr>
        <br>
        <div class="cont-elements cont-elements__telas">
          <h3>Header</h3>
          <p>O header ocupa todas as colunas e é fixo no bordo superior da tela.</p>

          <div class="telas-exemple">
            <img class="telas__first" src="grid/2.svg">
            <img class="telas__first" src="grid/2-1.svg">
          </div>

        </div>
        <!--  -->
        <div class="cont-elements cont-elements__telas">
          <h3>Área à esquerda e área principal</h3>
          <p>Em muitas telas há um área de interação fixa à esquerda, por exemplo com upload ou resumo dos dados, e uma
            área principal que muda a partir do que é configurado na área da esquerda.</p>

          <div class="telas-exemple">
            <span><img class="telas__first" src="grid/3.svg">
              <p class="detail_02">1080px</p>
            </span>
            <span><img class="telas__first" src="grid/3-1.svg">
              <p class="detail_02">1920px</p>
            </span>
          </div>
        </div>

        <!--  -->

        <div class="cont-elements cont-elements__telas">
          <h3>Área à esquerda e área principal</h3>
          <p>Em telas como leads, chatbot e mapas há uma área principal fixa e centralizada que é deslocada para a esquerda para dar espaço a uma barra móvel com detalhamentos.</p>
          <div class="telas-exemple">
            <span><img class="telas__first" src="grid/4.svg">
              <p class="detail_02">1080px</p>
            </span>
            <span><img class="telas__first" src="grid/4-1.svg">
              <p class="detail_02">1920px</p>
            </span>
          </div>
          <div class="telas-exemple">
            <span><img class="telas__first" src="grid/5.svg">
              <p class="detail_02">1080px</p>
            </span>
            <span><img class="telas__first" src="grid/5-1.svg">
              <p class="detail_02">1920px</p>
            </span>
          </div>
        </div>

        <!--  -->

        <div class="cont-elements cont-elements__telas">
          <h3>Mapa SIG</h3>
          <p>Os mapas tomam 100% da área da tela, mas há campos de busca, e camadas que são flutuantes. Bem com barra
            lateral à direita com detalhamento para elementos do mapa.</p>
          <div class="telas-exemple">
            <span><img class="telas__first" src="grid/6.svg">
              <p class="detail_02">1080px</p>
            </span>
            <span><img class="telas__first" src="grid/6-1.svg">
              <p class="detail_02">1920px</p>
            </span>
          </div>
          <div class="telas-exemple">
            <span><img class="telas__first" src="grid/7.svg">
              <p class="detail_02">1080px</p>
            </span>
            <span><img class="telas__first" src="grid/7-1.svg">
              <p class="detail_02">1920px</p>
            </span>
          </div>
        </div>

        <!--  -->

        <div class="cont-elements cont-elements__telas">
          <h3>Área à esquerda, área principal e detalhamento móvel</h3>
          <p>A tela de chatbot conta com 3 elementos divisores de tela. A lista de conversas assume uma área fixa à
            esquerda. A conversa com cada um dos contatos assume a área central, mostrando o conteúdo de cada uma das
            conversas. E a direita há uma área móvel de detalhamento das conversas com informações extras.</p>

          <div class="telas-exemple">
            <span><img class="telas__first" src="grid/8.svg">
              <p class="detail_02">1080px</p>
            </span>
            <span><img class="telas__first" src="grid/8-1.svg">
              <p class="detail_02">1920px</p>
            </span>
          </div>
          <div class="telas-exemple">
            <span><img class="telas__first" src="grid/9.svg">
              <p class="detail_02">1080px</p>
            </span>
            <span><img class="telas__first" src="grid/9-1.svg">
              <p class="detail_02">1920px</p>
            </span>
          </div>
        </div>

        <!--  -->

        <div class="cont-elements cont-elements__telas">
          <h3>Cardlist, detalhamento e mapa</h3>
          <p>A tela de logística para edição de rotas tem um grid composto por lista de romaneios à esquerda, detalhamento
            de cada romaneio ao lado direito da lista de cardlists, e mapa com a visualização de alterações à direita
            ocupando a maior parte do grid.</p>
          <div class="telas-exemple">
            <span><img class="telas__first" src="grid/10.svg">
              <p class="detail_02">1080px</p>
            </span>
            <span><img class="telas__first" src="grid/10-1.svg">
              <p class="detail_02">1920px</p>
            </span>
          </div>
          <div class="telas-exemple">
            <span><img class="telas__first" src="grid/11.svg">
              <p class="detail_02">1080px</p>
            </span>
            <span><img class="telas__first" src="grid/11-1.svg">
              <p class="detail_02">1920px</p>
            </span>
          </div>
        </div>


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

.telas-text {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  align-items: flex-start;
}

.telas__first {
  width: 100%;
}


.cont-elements__telas {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.telas-exemple {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 40px;
  align-items: flex-start;
}
</style>
