<template>
  <div>
    <div class="container">
      <div class="mestre">
        <div class="pai">
          <div class="filho">
            <div class="relatorio">Relatório de rotas</div>
            <div class="romaneio">Romaneio X - Detalhes de Entrega</div>
          </div>
          <div class="data">01/01/2022</div>
        </div>
        <table>
          <tr class="veiculo">
            <td v-for="(baitolao, index) in DadosTotais" :key="index">
              <b> {{ baitolao.name }} </b>
              <p>{{ baitolao.dados }}</p>
            </td>
          </tr>
        </table>
      </div>
      <br />
      <table class="cont-table">
        <tr class="titulo">
          <td>Identificação</td>
          <td>Endereço</td>
          <td>Número do Pedido</td>
          <td>Distância</td>
          <td>Modelo</td>
          <td>Quantidade</td>
          <td>Peso</td>
          <td>Volume</td>
          <td>Nota Fiscal</td>
        </tr>
        <tr class="resp" v-for="(trTop, index) in dadosBackEnd" :key="index">
          <td v-for="(dado, index) in trTop.tr" :key="index">
            {{ dado.td }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "PDF",
  data() {
    return {
      DadosTotais: [
        {
          name: "Veículos",
          dados: "20",
        },
        {
          name: "N° de visitas",
          dados: "20",
        },
        {
          name: "Distância Total",
          dados: "100km",
        },
        {
          name: "Temp Total",
          dados: "223450",
        },
        {
          name: "Peso Total",
          dados: "34",
        },
        {
          name: "Volume Total",
          dados: "425643",
        },
        {
          name: "Ocupação Total",
          dados: "485603",
        },
      ],

      dadosBackEnd: [
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Pedro" },
            { td: "Eva" },
            { td: "Bilica" },
            { td: "José" },
          ],
        },
        {
          tr: [
            { td: "Mateus" },
            { td: "Guilherme" },
            { td: "Gustavo" },
            { td: "Ivo" },
            { td: "Elisa" },
            { td: "Wesley" },
            { td: "Nath" },
            { td: "Ane" },
            { td: "Luciano" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
/* Roboto */
/* font-family: 'Roboto', sans-serif; */

@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;300;400;500;600;700;800;900&display=swap");
/* Roboto Slab */
/* font-family: 'Roboto Slab', serif; */

.container {
  width: 1000px;
  margin: auto;
  color: #2c2c2c !important;
}
.mestre {
  border-collapse: collapse;
}
.relatorio {
  display: flex;
  font-size: 35px;
}
.pai {
  display: flex;
  font-size: 25px;
}
.filho {
  width: 1040px;
}
.filho div {
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  border-width: 1px 0 0 1px;
  border-color: #cacaca;
  border-style: solid;
  height: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.data {
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  width: 222px;
  text-align: center;
  border-width: 1px 1px 0 1px;
  border-color: #cacaca;
  border-style: solid;
}
table {
  border-collapse: collapse;
}
h1 {
  font-size: 16px;
  color: #2c2c2c;
}
.veiculo td {
  border-width: 1px;
  border-color: #cacaca;
  border-style: solid;
  height: 56px;
  width: 159px;
  padding: 10px;
  text-align: center;

  font-size: 18px;
}
.veiculo tr {
  margin-left: 400px;
  height: 40px;
}
.titulo td {
  font-size: 18px;
}

.cont-table > tr:nth-child(2n) {
  background: #f0f0f0;
}

.cont-table td {
  width: 117px;
}
td {
  border-width: 1px;
  border-color: #cacaca;
  border-style: solid;

  padding: 10px;
  text-align: center;
}
.resp td {
  font-weight: normal;
  font-size: 18px;
}
</style>