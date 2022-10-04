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

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

body {
  overflow-y: scroll;
  background: #fdfbf9;
  padding-top: 75px;
}

.flex {
  display: flex;
  align-items: center;
}

/* BOTÕES */

/* Primário */
.el-button {
  box-shadow: 0 3px 6px var(--dm_cinza_03);
  font-family: "Rotobo", sans-serif;
  background: var(--dm_azul_00) !important;
  color: var(--dm_creme_00) !important;
  border-radius: 6px;
  transition: 0.2s;
  font-weight: 500;
  font-size: 16px;
  padding: 0 15px;
  border: none !important;
  height: 35px;
  cursor: pointer;
}

.el-button--primario-larger {
  box-shadow: 0 3px 6px var(--dm_cinza_03);
  font-family: "Rotobo", sans-serif;
  background: var(--dm_azul_00) !important;
  color: var(--dm_creme_00) !important;
  border-radius: 6px;
  transition: 0.2s;
  font-weight: 500;
  font-size: 16px;
  padding: 0 15px;
  border: none !important;
  height: 35px;
  cursor: pointer;
  height: 42px !important;
  padding: 0 20px !important;
}

.el-button:focus {
  background: var(--dm_amarelo_00) !important;
}
.el-button:hover {
  background: var(--dm_azul_02) !important;
  transition: 0.2s;
}

/* Secundário */

.el-button--secundario {
  box-shadow: 0 3px 6px var(--dm_cinza_03) !important;
  font-family: "Rotobo", sans-serif !important;
  background: var(--dm_creme_00) !important;
  color: var(--dm_azul_00) !important;
  border-radius: 6px !important;
  transition: 0.2s !important;
  font-weight: 500 !important;
  font-size: 16px !important;
  padding: 0 15px !important;
  border: 2px solid var(--dm_azul_00) !important;
  height: 35px !important;
  cursor: pointer !important;
}

.el-button--secundario-larger {
  box-shadow: 0 3px 6px var(--dm_cinza_03) !important;
  font-family: "Rotobo", sans-serif !important;
  background: var(--dm_creme_00) !important;
  color: var(--dm_azul_00) !important;
  border-radius: 6px !important;
  transition: 0.2s !important;
  font-weight: 500 !important;
  font-size: 16px !important;
  padding: 0 15px !important;
  border: 2px solid var(--dm_azul_00) !important;
  height: 35px !important;
  cursor: pointer !important;
  height: 42px !important;
  padding: 0 20px !important;
}

.el-button--secondario:focus {
  border-color: var(--dm_amarelo_00) !important;
  color: var(--dm_amarelo_00) !important;
}
.el-button--terciario:hover {
  background: var(--dm_azul_02) !important;
  transition: 0.2s !important;
}

/* Terciário */

.el-button--terciario {
  font-family: "Rotobo", sans-serif !important;
  font-size: 16px !important;
  color: var(--dm_azul_00) !important;
  border-radius: 6px !important;
  transition: 0.2s !important;
  font-weight: 500 !important;
  border: none !important;
  cursor: pointer !important;
  box-shadow: none;
  background: none !important;
  text-decoration: underline !important;
}

.el-button--terciario-larger {
  font-family: "Rotobo", sans-serif !important;
  font-size: 20px !important;
  color: var(--dm_azul_00) !important;
  border-radius: 6px !important;
  transition: 0.2s !important;
  font-weight: 500 !important;
  border: none !important;
  cursor: pointer !important;
  box-shadow: none;
  background: none !important;
  text-decoration: underline !important;
}

.el-button--terciario:focus {
  color: var(--dm_amarelo_00) !important;
}
.el-button--terciario:hover {
  color: var(--dm_azul_02) !important;
  transition: 0.2s !important;
  background: none !important;
}

.el-button--terciario-larger:hover {
  color: var(--dm_azul_02) !important;
  background: none !important;
}
</style>
