<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <h1>/Element Plus - Instalação</h1>
        <hr>
        <p>O Element Plus pode ser executado em navegadores que suportamES2018eResizeObserver. Se você realmente precisa oferecer suporte a navegadores desatualizados, adicionebabele Polyfill você mesmo.</p>
        <br>
        <div class="cont-elements">
          <h3>Usando o Gerenciador de Pacotes</h3>
          <br>
          <p>
            Recomendamos usar o gerenciador de pacotes NPM
          </p>
          <br>
          <div class="dm_creme_00">
            <p gray># NPM</p>
            <p>$ <span blue>npm install</span> element-plus --save</p>
          </div>
        </div>
        <div class="cont-elements">
          <h3>Importação completa</h3>
          <br>
          <p>Se você não se importa tanto com o tamanho do pacote, é mais conveniente usar a importação completa.</p>
          <br>
          <div class="dm_creme_00">
            <p green>// main.ts</p>
            <p><span roxo>import</span> <span gray>{</span> createApp <span gray>}</span> from 'vue'</p>
            <p><span roxo>import</span> ElementPlus from 'element-plus'</p>
            <p><span roxo>import</span> 'element-plus/dist/index.css'</p>
            <p><span roxo>import</span> App from './App.vue'</p>
            <br>
            <p><span blue>const</span> app = createApp<span gray>(</span>App<span gray>)</span></p>
            <br>
            <p>app.<span blue>use</span><span gray>(</span>ElementPlus, {locale: pt,<span gray>})</span></p>
            <p>app.<span blue>mount</span><span gray>(</span>'#app'<span gray>)</span></p>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
  
<script>
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "ElementPlus",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Element Plus",
    }
  },
};
</script>

<style scoped>
.dm_creme_00 {
  padding: 14px;
  width: max-content;
  border-radius: 6px;
}

[gray] {
  color: var(--dm_cinza_02);
}
</style>