<template>
  <div class="side-bar">
    <img class="logo-dm" src="/logo.svg" />
    <!-- Princípios -->
    <!-- <div class="component-tag tag-ativa">Instalação</div> -->
    <div class="component-tag">Instalação</div>
    <div class="options">
      <router-link to="/">Instalação</router-link>
    </div>
    <div class="component-tag">Princípios</div>
    <!-- Fundação -->
    <div class="component-tag">Fundação</div>
    <div class="options">
      <router-link to="ColorsDs">Cores</router-link>
      <router-link to="TipografiaDs"> Tipografia </router-link>
      <router-link to="IconografiaDs"> Iconografia </router-link>
    </div>

    <!-- Componentes -->
    <div class="component-tag">Componentes</div>
    <div class="options">
      <router-link to="HeaderPage">Header</router-link>
      <router-link to="BotaoDs">Botão</router-link>
      <router-link to="CampoTextoDs">Campo de Texto</router-link>
      <router-link to="CalendarioDs">Calendário</router-link>
      <router-link to="CardsDs">Cards</router-link>
      <router-link to="CheckboxDs">Checkbox</router-link>
      <router-link to="DropdownDs">Dropdown</router-link>
      <router-link to="LoadingDs">Loading</router-link>
      <router-link to="MenssagensDs">Menssagens</router-link>
      <router-link to="PinsDs">Pins</router-link>
      <router-link to="TabelasDs">Tabelas</router-link>
      <router-link to="TagsDs">Tags</router-link>
    </div>
    <router-link to="SobreDs" class="component-tag"> Sobre </router-link>
    <!--  <el-footer>
      <img src="/grafismos/graf-01-background.svg" />
      <img src="/grafismos/graf-02-background.svg" />
    </el-footer> -->
  </div>
</template>

<script>
export default {
  name: "AsideComponent",
  props: {
    btnAtivo: String,
  },
};
</script>

<style scoped>
a {
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  color: var(--dm_preto_00);
}
a:hover {
  text-decoration: underline;
  color: var(--dm_cinza_01);
}
a:focus {
  text-decoration: underline;
  color: var(--dm_azul_00);
}
/*  */
.side-bar {
  position: fixed;
  background: #faf6f0;
  overflow-y: auto;
  width: 256px;
  /* padding: 17px; */
  height: calc(100vh - 75px);
  padding: 10px;
  padding-bottom: 30px;
}

.Principles {
  font-family: "Roboto Slab", serif;
  font-weight: 300;
}

.principles-1 {
  font-family: "Roboto Slab", serif;
  font-size: 30px;
  font-weight: 500;
}

.DS {
  font-size: 28px;
  font-family: "Roboto Slab", serif;
}

.logo-dm {
  height: 40px;
  width: 132px;
}

.component-tag {
  font-size: 20px;
  font-weight: 500;
  font-family: "Roboto Slab", serif;
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 30px;
  border-radius: 6px;
  margin: 15px 0;
}

.tag-ativa {
  background: #0764f4;
  color: #faf6f0;
}

.btn-aside {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  padding: 10px 0;
}

.btn-aside button {
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 400;
  margin-left: 25px;
  transition: 0.3s;
  cursor: pointer;
}

.btn-aside button:hover {
  color: #0764f4;
  transition: 0.3s;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0 10px 25px;
}

.options p {
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.2s;
}

.options p:hover {
  transition: 0.2s;
  color: var(--dm_cinza_02);
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #2c2c2c;
  padding: 0;
}
</style>
