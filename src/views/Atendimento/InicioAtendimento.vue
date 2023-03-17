<template>
  <div>
    <FaleConosco />

    <AsideNav />
    <atendimento-container>
      <el-row>
        <el-col :span="22" :offset="1" class="faq">
          <SearchBar />
          <br>
          <br>
          <br>
          <h1><span style="color: var(--dm_azul_00)">/</span>Perguntas frequentes</h1>
          <hr>
          <div class="faq__questions">
            <router-link class="link h6" to="ScraperFaq">Como funciona a busca?</router-link>
            <router-link class="link h6" to="">Como funciona a seleção de datas?</router-link>
            <router-link class="link h6" to="">Como interagir com os gráficos?</router-link>
            <router-link class="link h6" to="">Como funciona as tabelas de ranking?</router-link>
            <router-link class="link h6" to="">Como sair do sistema?</router-link>
            <router-link class="link h6" to="">Encontrei um Bug. O que fazer?</router-link>
          </div>
        </el-col>
      </el-row>
    </atendimento-container>

  </div>
</template>
<script>
import SearchBar from './SearchBar.vue'
import FaleConosco from './FaleConosco.vue'
import AsideNav from './AsideNav.vue'

export default {
  name: "InicioAtendimento",
  components: {
    SearchBar,
    FaleConosco,
    AsideNav,
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

.link {
  text-decoration: none;
  transition: .2s;
  color: var(--dm_azul_00);
}

.link:hover {
  text-decoration: underline !important;
  color: var(--dm_azul_01);
  transition: .2s;
}
</style>
 