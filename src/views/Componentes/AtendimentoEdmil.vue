<template>
  <div>
    <dm-information class="forms">
      <dm-icon Lamp />
      <span>
        <p>
          Encontrou algum erro?
        </p>
        <el-button type="terciario" class="fale">Fale Conosco</el-button>
      </span>
    </dm-information>
    <el-row>
      <el-col :span="5" class="aside">
        <el-collapse @change="handleChange" v-for="(coisa, index) in 10" :key="index">
          <el-collapse-item>
            <template #title>

              <div class="aside__option">
                <div class="aside__icon">
                  <dm-icon DArrowLeftWhite />
                </div>
                <h6>Unknown printer took</h6>
              </div>
            </template>
            <div class="aside__container" v-for="(coisa, index) in 3" :key="index">
              <option-aside class="h6">Aside option</option-aside>
            </div>
          </el-collapse-item>

        </el-collapse>
      </el-col>

      <el-col :span="12" :offset="1" class="faq">
        <el-input v-model="input" placeholder="Pesquisar" />
        <br>
        <br>
        <br>
        <h1><span style="color: var(--dm_azul_00)">/</span>Perguntas frequentes</h1>
        <hr>

        <div class="faq__questions">
          <h6>Como funciona a busca?</h6>
          <h6>Como funciona a seleção de datas?</h6>
          <h6>Como interagir com os gráficos?</h6>
          <h6>Como funciona as tabelas de ranking?</h6>
          <h6>Como sair do sistema?</h6>
          <h6>Encontrei um Bug. O que fazer?</h6>
        </div>
      </el-col>

      <el-col :span="5" :offset="1" class="relacionados detail_02">
        <h6>Artigos Relacionados</h6>
        <br>
        <a>Contexto de parceria</a>
        <a>Tela de visão geral</a>
        <a>Seleção de período</a>
        <a>Ranking por níveis de agregação</a>
        <a>Previsão total</a>
        <a>Níveis de agregação</a>
        <a>Tela de lojas</a>
        <a>Ficha técnica</a>
        <a>Gráficos de composição de </a>
        <a>Gráficos de composição de vendas de composição de vendas</a>
        <a>Número de itens vendidos</a>
        <a>Previsão de vendas Previsão de vendas</a>
        <a>Desempenho da loja</a>
        <a>Previsão Anual</a>
        <a>Ticket médio</a>
        <a>Tela de regionais tela de regionais tela de regionais</a>
        <a>Campo de busca e período</a>
        <a>Ranking regional</a>
        <a>Desempenho regional</a>

      </el-col>

    </el-row>

  </div>
</template>
<script>

export default {
  name: "AtendimentoEdmil",
  data() {
    return {
      input: null
    }
  }
};
</script>
  
<style scoped>
.aside {
  background: var(--dm_creme_01);
  height: 100vh;
  padding: 10px;
  padding-top: 50px;
  min-width: 0px;
}

.aside__option {
  display: flex;
  gap: 20px;
  align-items: center;
}

.aside__icon {
  padding: 6px;
  border-radius: 100%;
  background-color: var(--dm_azul_00);
}

.aside__container {
  display: flex;
  flex-direction: column;
}

option-aside {
  display: flex;
  border-radius: 6px;
  padding: 8px 14px;
  margin-left: 26px;
  transition: .2s;
  width: 86%;
  cursor: pointer;
}

option-aside:hover {
  background: var(--dm_azul_03);
  transition: .2s;
}

.relacionados {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 20px 20px 20px;
  height: 100vh;
  min-width: 240px;
}

.relacionados a {
  cursor: pointer;
  margin-bottom: 10px;
  transition: .2s;
}

.relacionados a:hover {
  color: var(--dm_azul_00);
  transition: .2s;
}

.faq {
  margin-top: 50px;
}

.faq__questions {
  display: flex;
  flex-direction: column;
  color: var(--dm_azul_00);
  gap: 30px;
  margin-top: 30px;
}


.faq__questions h6 {
  transition: .6s;
  cursor: pointer;
}

.faq__questions h6:hover {
  color: var(--dm_azul_02);
  transition: .2s;

}

.forms {
  position: fixed;
  z-index: 200;
  bottom: 30px;
  right: 30px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
}

@keyframes lamp {
  0% {
    opacity: 1;
  }

  2% {
    opacity: 0.7;
  }

  4% {
    opacity: 1;
  }

  10% {
    opacity: 1;
  }

  12% {
    opacity: 0.7;
  }

  14% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

[Lamp] {
  animation-name: lamp;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
</style>
  