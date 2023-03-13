<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <h1>/Instalação Design System</h1>
        <hr>
        <p>
          O design System foi desenvolvido em cima do Element Plus, com isso, a instalação do Element Plus é
          imprescindível para a aplicação da identidade visual da Data Machina nos componentes.
        </p>
        <br>

        <div class="cont-elements inicio">
          <h3>Início</h3>
          <p> Baixe as pastas
            <a class="el-button--terciario"
              href="https://github.com/gustavoemmanoel/DM-Design-System/tree/main/src/common_dm"
              target="_blank">common_dm</a> e
            <a class="el-button--terciario"
              href="https://github.com/gustavoemmanoel/DM-Design-System/tree/main/public/images_dm"
              target="_blank">images_dm</a>,
            nela contém todos os estilos e imagens necessárias para customização dos componentes nativos do Element-Plus.
          </p>
          <p>Como o projeto Vue criado e o Element-Plus instalado, siga os seguintes passos.</p>
          <p>
            1° - Insira a pasta “common_dm” na pasta “src”
          </p>
          <img class="img1" src="instalacao/common_dm.jpg">

          <p>2° - Insira a pasta “images_dm” na pasta “public” </p>
          <img class="img1" src="instalacao/public.jpg">
          <p>3° - Na pasta “main.js” importe o arquivo “index.css” para que os estilos se tornem globais.</p>
          <img class="img2" src="instalacao/main.jpg">

          <p>Com isso, o Design System estará funcional.</p>

        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
    
<script>
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "DesignSystem",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Design System",
    }
  },
};
</script>

<style scoped>
.inicio {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.img1 {
  width: 50%;

}

.img2{
  width: 100%;
}
</style>