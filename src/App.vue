<template>
  <div>
    <!-- <AsideComponent /> -->
    <router-view class="mg-right-js" />
  </div>
</template>

<script>
// import AsideComponent from './components/AsideComponent.vue';
export default {
  // components: { AsideComponent },
  name: "app",


};
</script>

<style>
atendimento-container {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  min-height: 100vh;
  margin: auto;
}


* {
  box-sizing: border-box;
}

body {
  background: var(--dm_creme_02);
  overflow: overlay;
}

.mg-right-js {
  overflow: hidden;
  /* margin-left: 256px; */
}

.flex {
  display: flex;
  align-items: center;
}

.logo {
  width: 220px;
}

.el-aside {
  margin-top: 15px;
  width: 256px;
}

.containerInfos {
  background: var(--dm_creme_00);
  color: var(--dm_preto_00);
  border-radius: 6px;
  width: max-content;
  padding: 30px;
}

.componentsStyleContent {
  width: 100vw;
}

.el-main {
  margin: auto;
  margin-top: 15px;
  padding-bottom: 30px;
  max-width: 1020px;
  padding: 20px;
  padding: 60px 72px 20px 72px;
  box-sizing: border-box;
  border-radius: 6px;
}

.cont-elements {
  background: var(--dm_creme_01);
  width: 100%;
  border-radius: 6px;
  padding: 25px;
  margin-bottom: 30px;
}

.border-left {
  border-width: 0 0 0 1px;
  border-style: solid;
  border-color: rgb(217, 217, 217);
}

.html_codigos {
  color: var(--dm_cinza_02);
  font-size: 16px;
  line-height: 22px;
}

[black] {
  color: var(--dm_cinza_01);
}

[roxo] {
  color: rgb(193, 151, 255);
}

[tagColor] {
  color: var(--dm_azul_C03);
}

[attributeColor] {
  color: var(--dm_lilas_01);
}

[green] {
  color: var(--dm_verde_01);
}

[yellow] {
  color: #d8ad00;
}

[blue] {
  color: rgb(77, 146, 219);
}

[blue2] {
  color: rgb(114, 192, 255);
}

[brown] {
  color: rgb(176, 129, 97)
}

.recuo,
[recuo] {
  margin-left: 14px;
}

/*  */

.containerInterno {
  width: 100%;
}

.container_title {
  margin-bottom: 20px;
}

/* Inicio Alterações no collapse */

.el-collapse-item__header,
.el-collapse-item__wrap {
  background: none !important;
}

.el-collapse-item__content {
  padding: 0;
}

/* Fim Alterações no collapse */

.el-header {
  z-index: 100;
}
</style>
