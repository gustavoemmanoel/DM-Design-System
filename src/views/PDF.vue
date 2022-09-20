<template>
  <div>
    <div class="container">
      <div class="mestre">
        <div class="pai">
          <div class="filho">
            <div class="relatorio filhoDiv" > 
              <img src="/logo.jpg">
              <div class="rela"> Relatório de rotas </div></div>
            <div class="romaneio filhoDiv">Roteiro X - Detalhes de Entrega</div>
          </div>
          <div class="data">01/01/2022</div>
        </div>
        <table>
          <tr class="veiculo">
            <td v-for="(totaisdados, index) in DadosTotais" :key="index">
              <b> {{ totaisdados.name }} </b>
              <p>{{ totaisdados.dados }}</p>
            </td>
          </tr>
        </table>
      </div>
      <br />
      <table class="cont-table">
        <tr class="titulo">
          <td><b> Identificação</b></td>
          <td><b>Endereço</b></td>
          <td><b>Distância</b></td>
          <td><b>Quantidade</b></td>
          <td><b>Peso</b></td>
          <td><b>Volume</b></td>
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
  margin-top: 20px;
}
.relatorio {
  display: flex;
  font-size: 35px;
  align-items: center;
}

.relatorio img{
  width: 120px;
  object-fit: contain;
  position: absolute;
  margin-left: 10px;

}

.rela{
  width: 100%;
}


.pai {
  display: flex;
  font-size: 25px;
}
.filho {
  width: 728px;
}

.romaneio{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.filhoDiv {
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  border-width: 1px 0 0 1px;
  border-color: #cacaca;
  border-style: solid;
  height: 60px;
  text-align: center;
  display: flex;
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
  width: 190px;
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