<template>
  <div class="side-bar" @click="changeTagPage">

    <img class="logo-dm" src="/logo.svg" />
    <div class="options">
      <div class="component-tag">Princípios</div>
      <router-link pagename="" to="/">Início</router-link>
      <router-link pagename="Principios" to="Principios">Princípios</router-link>
    </div>
    <!-- Princípios -->
    <div class="options">
      <div class="component-tag">Instalação</div>
      <router-link pagename="ElementPlus" to="ElementPlus">Element Plus</router-link>
      <router-link pagename="DesignSystem" to="DesignSystem">Design System</router-link>
      <router-link pagename="VisualStudio" to="VisualStudio">Visual Studio</router-link>
    </div>
    <!-- Fundação -->
    <div class="options">
      <div class="component-tag">Fundação</div>
      <router-link pagename="Colors" to="Colors">Cores</router-link>
      <router-link pagename="Tipografia" to="Tipografia"> Tipografia </router-link>
      <router-link pagename="Iconografia" to="Iconografia"> Iconografia </router-link>
      <router-link pagename="Grafismos" to="Grafismos"> Grafismos </router-link>
      <router-link pagename="Grid" to="Grid"> Grid </router-link>
    </div>

    <!-- Telas -->
    <div class="options">
      <div class="component-tag">Telas</div>
      <router-link to="Login">Login</router-link>
    </div>

    <!-- Componentes -->
    <div class="options">
      <div class="component-tag">Componentes</div>
      <router-link pagename="Header" to="Header">Header</router-link>
      <router-link pagename="Botao" to="Botao">Botão</router-link>
      <router-link pagename="CampoTexto" to="CampoTexto">Campo de Texto</router-link>
      <router-link pagename="Dropdown" to="Dropdown">Dropdown</router-link>
      <router-link pagename="Calendario" to="Calendario">Calendário</router-link>
      <router-link pagename="Tags" to="Tags">Tags</router-link>
      <router-link pagename="Checkbox" to="Checkbox">Checkbox</router-link>
      <router-link pagename="Loading" to="Loading">Loading</router-link>
      <router-link pagename="Cards" to="Cards">Cards</router-link>
      <router-link pagename="Mensagens" to="Mensagens">Mensagens</router-link>
      <router-link pagename="Tabelas" to="Tabelas">Tabelas</router-link>
      <router-link pagename="Graficos" to="Graficos">Gráficos</router-link>
      <router-link pagename="Pins" to="Pins">Pins</router-link>
      <router-link pagename="Legenda" to="Legenda">Legenda</router-link>
      <router-link pagename="Upload" to="Upload">Upload</router-link>
    </div>
    <div class="options">
      <div class="component-tag">Sobre</div>
      <router-link to="Sobre">Sobre</router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "AsideComponent",
  props: {
    btnAtivo: String,

  },
  mounted() {

    this.pageLink()
  },
  methods: {
    pageLink() {

      const elementsArray = document.querySelectorAll('[pagename]')
      const nameURL = window.location.href.split('/#/')[1]

      for (let i = 0; i < elementsArray.length; i++) {
        const pageList = elementsArray[i].getAttribute('pagename')

        if (pageList == nameURL) {
          elementsArray[i].setAttribute('id', 'tagPage')
          elementsArray[i].parentNode.childNodes[0].setAttribute('id', 'TagSelected')
        }
      }
    },

    changeTagPage(event) {

      const tag = event.target
      if (tag.tagName === 'A') {

        document.getElementById('tagPage').parentNode.childNodes[0].removeAttribute('id')
        document.getElementById('tagPage').removeAttribute('id')

        tag.setAttribute('id', 'tagPage')
        document.getElementById('tagPage').parentNode.childNodes[0].setAttribute('id', 'TagSelected')
      }
    }
  }
};
</script>
<style scoped>
#TagSelected {
  background: var(--dm_azul_00);
  color: var(--dm_creme_02);
  padding: 0 10px;
  transform: translatex(-24px);
}

#tagPage {
  color: var(--dm_azul_00);
  font-weight: 500;
}

a {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: var(--dm_preto_00);
  text-decoration: none;
  transition: .1s;

}

a:hover {
  color: var(--dm_amarelo_00);
  transition: .1s;
}

a:focus {
  color: var(--dm_azul_00);
}

/*  */
.side-bar {
  margin-top: 75px;
  position: fixed;
  background: #faf6f0;
  overflow-y: auto;
  width: 256px;
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
  height: 30px;
  border-radius: 6px;
  transform: translateX(-14px);
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
