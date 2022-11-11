<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  overflow-y: scroll;
  background: #fdfbf9;
}

.flex {
  display: flex;
  align-items: center;
}

.logo {
  width: 220px;
}

.el-header {
  background: green;
  position: fixed;
  width: 100%;
  padding: 0 !important;
  height: 75px !important;
  overflow: hidden;
}

.el-aside {
  margin-top: 75px;
  width: 256px;
}

footer {
  background: pink;
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
  /* background: gray; */
}

.el-main {
  margin: auto;
  margin-top: 75px;
  margin-bottom: 30px;
  max-width: 1020px;
  padding: 20px;
  padding: 60px 72px 20px 72px;
  box-sizing: border-box;
  border-radius: 6px;
}

.container-elementos {
  background: var(--dm_creme_01);
  width: 100%;
  border-radius: 6px;
  padding: 25px;
  margin-bottom: 30px;
}

.chaves,
.html_color_conteudo,
.html_codigos_blue,
.html_color_axx {
  display: inline;
}

.html_codigos_blue {
  color: #3375b9;
  font-size: 14px;
  line-height: 18px;
}
.html_color_conteudo, [black] {
  color: #2c2c2c;
}

.html_color_axx, [roxo] {
  color: var(--dm_roxo_C04);
}
[green]{
  color: var(--dm_verde_00);
}
.recuo,
[recuo] {
  margin-left: 20px;
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
