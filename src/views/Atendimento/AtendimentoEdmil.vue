<template>
  <div>
    <FaleConosco />
    <el-row>
      <div style="width: 300px;">

        <AsideAtendimento />

      </div>

      <el-col :span="17" :offset="1" class="faq">
        <SearchBar />
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

    </el-row>

  </div>
</template>
<script>
import SearchBar from './SearchBar.vue'
import FaleConosco from './FaleConosco.vue'
import AsideAtendimento from './AsideNav.vue'

export default {
  name: "AtendimentoEdmil",
  components: {
    SearchBar,
    FaleConosco,
    AsideAtendimento,
  },
  data() {
    return {
      input: null
    }
  }
};
</script>
  
<style scoped>
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
  transition: .2s;
  cursor: pointer;
}

.faq__questions h6:hover {
  color: var(--dm_azul_02);
  transition: .2s;
  text-decoration: underline;

}
</style>
  