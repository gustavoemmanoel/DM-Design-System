<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <div>
          <h1>/Grafismos</h1>
          <hr />
          <br />
        </div>
        <br />
        <div class="cont-elements ">
          <p>
            Grafismos são elementos gráficos utilizados para preencher fundos
            sólidos e reforçar a marca nos materiais de comunicação
            institucional. Eles foram desenvolvidos junto com o branding e nos
            produtos digitais podem ser usados para criar fundos suaves em baixo
            contraste.
          </p>
          <br>
          <br>
          <div class="grid">
            <span><img class="grid__img" src="grafismos/graf_01.svg" alt="graf_01" />
              <p class="detail_01">graf_01</p>
            </span>
            <span><img class="grid__img" src="grafismos/graf_02.svg" alt="graf_02" />
              <p class="detail_01">graf_02</p>
            </span>
            <span><img class="grid__img" src="grafismos/graf_03.svg" alt="graf_03" />
              <p class="detail_01">graf_03</p>
            </span>
            <span><img class="grid__img" src="grafismos/graf_04.svg" alt="graf_04" />
              <p class="detail_01">graf_04</p>
            </span>
            <span><img class="grid__img" src="grafismos/graf_05.svg" alt="graf_05" />
              <p class="detail_01">graf_05</p>
            </span>
            <span><img class="grid__img" src="grafismos/graf_06.svg" alt="graf_06" />
              <p class="detail_01">graf_06</p>
            </span>
            <span>
              <img class="grid__img" src="grafismos/graf_07.svg" alt="graf_07" />
              <p class="detail_01">graf_07</p>
            </span>
          </div>
        </div>

        <h3>/Aplicação</h3>
        <hr>
        <br>
        <div class="cont-elements">
          <h3>Como utilizar:</h3>
          <img class="grid__img" src="grafismos/01.svg" />
          <br>
          <br>
          <p class="detail_01">Grafismo utilizado no fundo do painel de chatbot em baixo contraste, criando uma caixa de
            conteúdo diferenciada pelo grafismo.</p>

        </div>

      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "GrafismosDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Grafismos",
    };
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.grid__img {
  width: 100%;
}

.grid span {
  margin-bottom: 16px;
}
</style>
