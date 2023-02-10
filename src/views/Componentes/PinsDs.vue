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
        <div class="containerInterno">
          <div>
            <h1>/Pins</h1>
            <hr />
            <br />
            <p>Pins são elementos que servem para marcar pontos no mapa.</p>
          </div>
          <br />
          <div class="container-elementos">
            <h2>Pin básico</h2>
            <p>
              O pin básico é utilizado para representar uma informação de um
              ponto específico. Apesar de possuir um elemento ícone, o mesmo
              permace como um pin básico.
            </p>
            <br />
            <div class="pin__container">
              <img class="pin__large" src="imagens_design_system/pins/pin__basico--azul.svg" alt="Pin" />
              <img class="pin__small" src="imagens_design_system/pins/pin__basico--azul.svg" alt="Pin" />
            </div>

            <br />

          </div>
          <div class="container-elementos">
            <h2>Pin com ícone</h2>
            <p>
              O pin também pode conter um ícone interno para representar mais uma informação sobre aquele ponto específico.
            </p>
            <br />
            <div class="pin__container">

              <img class="pin__large" src="imagens_design_system/pins/pin__coroa.svg" alt="Pin" />
              <img class="pin__small" src="imagens_design_system/pins/pin__coroa.svg" alt="Pin" />

            </div>

          </div>
          <div class="container-elementos">
            <h2>Pin de desempenho</h2>
            <p>
              O pin de desempenho é um pin com duplo ícone. O segundo ícone apresenta o desempenho de um ponto em
              relação a outros pontos.
            </p>
            <br />
            <div class="pin__container">

              <img class="pin__large" src="imagens_design_system/pins/pin__desempenho--bom.svg" alt="Pin" />
              <img class="pin__small" src="imagens_design_system/pins/pin__desempenho--bom.svg" alt="Pin" />



            </div>
            <div class="pin__container">
              <span><img class="pin__desempenho" src="imagens_design_system/pins/bom.svg" alt="Pin" />
                Bom
              </span>
              <span><img class="pin__desempenho" src="imagens_design_system/pins/medio.svg" alt="Pin" />
                Médio
              </span>
              <span><img class="pin__desempenho" src="imagens_design_system/pins/ruim.svg" alt="Pin" />
                Ruim
              </span>
            </div>
         
            
          </div>

          <div class="container-elementos">
            <h2>Pin de desempenho</h2>
            <p>
              O pin de desempenho é um pin com duplo ícone. O segundo ícone apresenta o desempenho de um ponto em
              relação a outros pontos.
            </p>
            <br />
            <div class="pin__container">

              <img class="pin__large" src="imagens_design_system/pins/pin__desempenho--bom.svg" alt="Pin" />
              <img class="pin__small" src="imagens_design_system/pins/pin__desempenho--bom.svg" alt="Pin" />
            </div>
          </div>



          <div>
            <h1>/Aplicação</h1>
            <hr />
            <br />
          </div>
          <img class="mapa__pins" src="mapa__pins.svg">
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "PinsDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Pins",
    };
  },
};
</script>

<style scoped>
.pin__large {
  width: 72px;
  margin-right: 50px;
}

.pin__small {
  width: 40px;
}

.mapa__pins {
  width: 100%;
}

.pin__desempenho {
  width: 30px
}

.pin__container {
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 50px;
  width: 184px;
}

.pin__container span {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
