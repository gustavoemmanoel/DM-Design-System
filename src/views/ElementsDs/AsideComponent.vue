<template>
  <div>
    <div class="side-bar">
      <img class="logo-dm" src="/logo.svg" />
      <!-- Princípios -->
      <div class="component-tag tag-ativa">Princípios</div>
      <!-- Fundação -->
      <div class="component-tag tag-ativa">Fundação</div>
      <div class="options">
        <p>Cores</p>
        <p>Tipografia</p>
        <p>Iconografia</p>
        <p>Grafismos</p>
        <p>Grid</p>
      </div>

      <!-- Componentes -->
      <div class="component-tag">Componentes</div>
      <div class="options">
        <p>Header</p>
        <p>Botão</p>
        <p>Campo de Texto</p>
        <p>Dropdown</p>
      </div>
      <header>
        <img src="/grafismos/graf-01-background.svg" />
        <img src="/grafismos/graf-02-background.svg" />
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsideComponent",
};
</script>

<style scoped>
/*  */
.side-bar {
  position: fixed;
  background: #faf6f0;
  padding: 17px;
  height: calc(100vh - 75px);
  width: 16.666vw;
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

header {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #2c2c2c;
}
</style>