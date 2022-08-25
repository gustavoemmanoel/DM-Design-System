<template>
  <div>
    <div class="side-bar">
      <img class="logo-dm" src="" />
      <!-- Princípios -->
      <div class="component-tag tag-ativa">Princípios</div>
      <!-- Fundação -->
      <div class="component-tag tag-ativa">Fundação</div>
      <p>Cores</p>
      <p>Tipografia</p>
      <p>Iconografia</p>
      <p>Grafismos</p>
      <p>Grid</p>

      <!-- Componentes -->
      <div class="component-tag">Componentes</div>
      <p>Header</p>
      <p>Botão</p>
      <p>Campo de Texto</p>
      <p>Dropdown</p>
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
  width: 200px;
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
</style>