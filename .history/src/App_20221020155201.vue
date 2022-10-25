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
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
/* font-family: 'Roboto', sans-serif; */

@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;300;400;500;600;700;800;900&display=swap");
/* font-family: 'Roboto Slab', serif; */

@import 'index.css';

body {
  overflow-y: scroll;
  background: #fdfbf9;
  /* padding-top: 75px; */
}

.flex {
  display: flex;
  align-items: center;
}

</style>

<style>
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
  background: yellow;
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
  background: red;
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
  /* float: left;   */
}

.html_codigos_blue {
  color: #3375b9;
}
.html_color_conteudo {
  color: #2c2c2c;
}

.html_color_axx {
  color: var(--dm_roxo_C04);
}

/*  */

.html-line-height {
  line-height: 25px;
  background: rgba(151, 240, 151, 0.404);
}
</style>
