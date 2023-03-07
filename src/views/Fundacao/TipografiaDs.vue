<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <h1>/Tipografia</h1>
        <hr>
        <br>
        <div v-for="(tableContent, index) in table" :key="index">
          <div class="cont-elements">
            <p class="h3">{{ tableContent.row[0].title }}</p>
            <br>
            <table>
              <tr class="title-table h4">
                <td>Categoria</td>
                <td>Fonte</td>
                <td>Peso</td>
                <td>Tamanho</td>
                <td>Token</td>
                <td>Exemplo</td>
              </tr>
              <tr v-for="(classH, index) in tableContent.row" :key="index">
                <td :class="classH.token"  width="140">{{ classH.categoria }}</td>
                <td width="124">{{ classH.roboto }}</td>
                <td width="124">{{ classH.peso }}</td>
                <td width="124">{{ classH.pixel }}</td>
                <td width="124">{{ classH.token }}</td>
                <td :class="classH.token">{{ classH.exemplo }}</td>
              </tr>
            </table>
          </div>
        </div>

        <h3>/Aplicação</h3>
        <hr>
        <h4>Como utilizar:</h4>
        <br>


        <!-- /h1 -->
        <div class="cont-elements gap-container">
          <h1 style="align-self: flex-start;">Título H1</h1>
          <img src="tipografia/01.jpg" alt="">

          <div class="aplicacao">
            <span>
              <h1>/Lorem ipsum</h1>
              <h1 class="aplicacao__segundo">/Lorem ipsum</h1>
              <h1 class="aplicacao__terceiro">
                /Lorem ipsum</h1>
            </span>
            <span>
              <h1>Lorem ipsum</h1>
              <h1 class="aplicacao__segundo">Lorem ipsum</h1>
              <h1 class="aplicacao__terceiro">
                Lorem ipsum</h1>
            </span>
          </div>
          <br>
          <p>Utilizada no título principal da tela, que pode ser acompanhado de uma “/”. Em fundos claros pode ser
            utilizada nas cores dm_preto_00 ou dm_cinza_01 e em fundos escuros na cor dm_creme_00.</p>
        </div>

        <!-- /h2 -->
        <div class="cont-elements gap-container">
          <h2 style="align-self: flex-start;">/Título H2</h2>

          <img src="tipografia/02.jpg">

          <div class="aplicacao">
            <span>
              <h2>Lorem ipsum</h2>
              <h2 class="aplicacao__segundo">Lorem ipsum</h2>
              <h2 class="aplicacao__terceiro">
                Lorem ipsum</h2>
            </span>
            <span>
              <h2>/Lorem ipsum</h2>
              <h2 class="aplicacao__segundo">/Lorem ipsum</h2>
              <h2 class="aplicacao__terceiro">
                /Lorem ipsum</h2>
            </span>
          </div>

          <p>Utilizada no segundo título mais importante (se houver). Pode ser acompanhado de uma “/”. Em fundos claros
            pode ser utilizada nas cores dm_preto_00 ou dm_cinza_01 e em fundos escuros na cor dm_creme_00.</p>
        </div>

        <!-- h3 -->

        <div class="cont-elements gap-container">
          <h3 style="align-self: flex-start;">Título H3</h3>
          <img src="tipografia/03.png">

          <h3>Lorem ipsum</h3>
          <h3 class="aplicacao__segundo">Lorem ipsum</h3>
          <h3 class="aplicacao__terceiro">
            Lorem ipsum</h3>
          <br>
          <p>Utilizada como terceiro título (se houver). Em fundos claros pode ser utilizada nas cores dm_preto_00 ou
            dm_cinza_01 e em fundos escuros na cor dm_creme_00.</p>
        </div>
        <!-- h4 -->

        <div class="cont-elements gap-container">
          <h4 style="align-self: flex-start;">/Título H4</h4>
          <hr>

          <img src="tipografia/04.png">

          <h4>/Lorem ipsum</h4>
          <h4 class="aplicacao__segundo">/Lorem ipsum</h4>
          <h4 class="aplicacao__terceiro">
            /Lorem ipsum</h4>

          <br>
          <p>Utilizada para títulos de gráficos, popups ou quarto título mais importante da página (se houver). Em fundos
            claros pode ser utilizada nas cores dm_preto_00 ou dm_cinza_01 e em fundos escuros na cor dm_creme_00.</p>
        </div>

        <!-- h5 -->

        <div class="cont-elements gap-container">
          <h5 style="align-self: flex-start;">/Título H5</h5>

          <img src="tipografia/05.png">

          <h5>/Lorem ipsum</h5>
          <h5 class="aplicacao__segundo">/Lorem ipsum</h5>
          <h5 class="aplicacao__terceiro">
            /Lorem ipsum</h5>

          <br>
          <p>Utilizada em tabelas, na barra de títulos. Em fundos claros pode ser utilizada nas cores dm_preto_00 ou
            dm_cinza_01 e em fundos escuros na cor dm_creme_00.</p>
        </div>

        <!-- Corpo 01 -->

        <div class="cont-elements gap-container">
          <p class="body_01" style="align-self: flex-start;">Corpo 01</p>

          <img src="tipografia/13.svg">

          <p class="body_01">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <p class="body_01 aplicacao__segundo">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor</p>
          <p class="body_01 aplicacao__terceiro">
            /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

          <br>
          <p>Utilizado no texto dos botões grandes, tanto primários quanto secundários e terciários. Em fundos claros pode
            ser utilizada nas cores dm_preto_00 ou dm_cinza_01 e em fundos escuros na cor dm_creme_00.</p>
        </div>

        <!-- Corpo 02 -->
        <div class="cont-elements gap-container">
          <p class="body_02" style="align-self: flex-start;">Corpo 02</p>

          <img src="tipografia/14.png">
          <div style="display: flex; align-items: center; gap:20px">
            <img src="tipografia/14-1.svg">
            <img src="tipografia/14-2.svg">
            <img src="tipografia/14-3.svg">
          </div>

          <p class="body_02 ">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <p class="body_02 aplicacao__segundo">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor</p>
          <p class="body_02 aplicacao__terceiro">
            /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

          <br>
          <p>Utilizado no texto de destaque nas mensagens de erro e avisos. E também nos botões pequenos (primários,
            secundários e terciários). Em fundos claros pode ser utilizada nas cores dm_preto_00 ou dm_cinza_01 e em
            fundos escuros na cor dm_creme_00.</p>
        </div>

        <!-- Corpo 03 -->

        <div class="cont-elements gap-container">
          <p class="body_03" style="align-self: flex-start;">Corpo 03</p>

          <img src="tipografia/15.png">

          <h5 class="body_03 ">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
          <h5 class="body_03 aplicacao__segundo">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor</h5>
          <h5 class="body_03 aplicacao__terceiro">
            /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>

          <br>
          <p>Utilizado nos textos das tabelas, nas linhas de dados. Em fundos claros pode ser utilizada nas cores
            dm_preto_00 ou dm_cinza_01 e em fundos escuros na cor dm_creme_00.</p>
        </div>

        <!-- Corpo 04 -->

        <div class="cont-elements gap-container">
          <p class="body_04" style="align-self: flex-start;">Corpo 04</p>

          <img src="tipografia/16.png">

          <p class="body_04">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <p class="body_04 aplicacao__segundo">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor</p>
          <p class="body_04 aplicacao__terceiro">
            /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

          <br>
          <p>Utilizado nas legendas dos eixos x e y nos gráficos. Em fundos claros pode ser utilizada nas cores
            dm_preto_00 ou dm_cinza_01 e em fundos escuros na cor dm_creme_00.</p>
        </div>

        <!-- Corpo 05 -->

        <div class="cont-elements gap-container">
          <p class="body_05" style="align-self: flex-start;">Corpo 05</p>

          <img src="tipografia/17.png">

          <p class="body_05">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <p class="body_05 aplicacao__segundo">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor</p>
          <p class="body_05 aplicacao__terceiro">
            /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

          <br>
          <p>Utilizado nos nomes de conversas no chatbot. Em fundos claros pode ser utilizada nas cores dm_preto_00 ou
            dm_cinza_01 e em fundos escuros na cor dm_creme_00.</p>
        </div>

        <!-- Detalhe 01 -->

        <div class="cont-elements gap-container">
          <p class="detail_01" style="align-self: flex-start;">Detalhe 01</p>

          <img src="tipografia/18.png">

          <p class="detail_01">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <p class="detail_01 aplicacao__segundo">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor</p>
          <p class="detail_01 aplicacao__terceiro">
            /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

          <br>
          <p>Utilizado nas mensagens para oferecer detalhes e texto do tipo “saiba mais”. Em fundos claros pode ser
            utilizada nas cores dm_preto_00 ou dm_cinza_01 e em fundos escuros na cor dm_creme_00.</p>
        </div>

        <!-- Detalhe 02 -->

        <div class="cont-elements gap-container">
          <p class="detail_02" style="align-self: flex-start;">Detalhe 02</p>

          <img src="tipografia/19.svg">

          <p class="detail_02">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <p class="detail_02 aplicacao__segundo">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor</p>
          <p class="detail_02 aplicacao__terceiro">
            /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

          <br>
          <p>Utilizado nas mensagens de erro associada a caixas de texto. Em fundos claros pode ser utilizada nas cores
            dm_preto_00 ou dm_cinza_01 e em fundos escuros na cor dm_creme_00.</p>
        </div>

        <!-- Detalhe 03 -->

        <div class="cont-elements gap-container">
          <p class="detail_03" style="align-self: flex-start;">Detalhe 03</p>

          <img src="tipografia/20.svg">

          <p class="detail_03">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <p class="detail_03 aplicacao__segundo">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor</p>
          <p class="detail_03 aplicacao__terceiro">
            /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

          <br>
          <p>Utilizada nas caixa de texto associadas com ícone de dúvida . Em fundos claros pode ser utilizada nas cores
            dm_preto_00 ou dm_cinza_01 e em fundos escuros na cor dm_creme_00.</p>
        </div>

        <!-- Detalhe 04 -->

        <div class="cont-elements gap-container">
          <p class="detail_04" style="align-self: flex-start;">Detalhe 04</p>

          <img src="tipografia/21.png">

          <p class="detail_04">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <p class="detail_04 aplicacao__segundo">/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor</p>
          <p class="detail_04 aplicacao__terceiro">
            /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>

          <br>
          <p>Utilizada no detalhe das legendas de mapa, para identificar categorias diferentes de cores e pins . Em fundos
            claros pode ser utilizada nas cores dm_preto_00 ou dm_cinza_01 e em fundos escuros na cor dm_creme_00.</p>
        </div>


      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";
export default {
  name: "TipografiaDs",
  components: { HeaderDs },
  data() {
    return {
      headerTitle: "Tipografia",
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
  color: var(--dm_azul_00);
}

table tr td {
  padding: 10px 0;
}

.aplicacao {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
}

.aplicacao span {
  display: flex;
  gap: 20px;
  flex-direction: column;
}

.aplicacao__segundo {
  color: var(--dm_cinza_01)
}

.aplicacao__terceiro {
  background: var(--dm_preto_00);
  padding: 10px;
  width: max-content;
  color: var(--dm_creme_02)
}

.gap-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
</style>
