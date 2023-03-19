<template>
  <AppTes :back-button="'ativo'">
    <atendimento-container>
      <div class="faq__questions">
        <router-link class="link h6" to="ScraperFaq">Como funciona a busca?</router-link>
        <router-link class="link h6" to="">Como funciona a seleção de datas?</router-link>
        <router-link class="link h6" to="">Como interagir com os gráficos?</router-link>
        <router-link class="link h6" to="">Como funciona as tabelas de ranking?</router-link>
        <router-link class="link h6" to="">Como sair do sistema?</router-link>
        <router-link class="link h6" to="">Encontrei um Bug. O que fazer?</router-link>
      </div>
    </atendimento-container>
  </AppTes>
</template>
<script>
import AppTes from './AppTes.vue'

export default {
  name: "InicioAtendimento",
  components: {
    AppTes
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
  background: none;
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
 