<template >
  <div class="header mg-right-js">
    <span>
      <img class="design__graf" src="/grafismo.svg" />
      <h1 class="design__cont">
        <p class="design__first"><span style="color: var(--dm_azul_00)">/</span>Design System</p>
        |
        <p class="design__second">{{ headerTitle }}</p>
      </h1>
      <p class="detail_01">Designed by Data Machina</p>
    </span>
    <div class="colors" :class="backgroundHeader">
      <h1 id="h1"></h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderDs",
  props: { headerTitle: String, },
  data() {
    return {
      link: null,
      backgroundHeader: null
    }
  },
  mounted() {
    this.getURL()

  },
  methods: {

    getURL() {
      setTimeout(() => {
        this.link = document.getElementById('TagSelected').innerText
        document.getElementById('h1').innerText = this.link

        const pageTopic = document.getElementById('h1').innerText

        if (pageTopic == 'Fundação') {
          this.backgroundHeader = 'dm_azul_00'
          console.log(this.backgroundHeader)
        }
        else if (pageTopic == 'Instalação') {
          this.backgroundHeader = 'dm_verde_00'
        }
        else if (pageTopic == 'Telas') {
          this.backgroundHeader = 'dm_laranja_00'
        }
        else if (pageTopic == 'Componentes') {
          this.backgroundHeader = 'dm_amarelo_00'
        }
        else if (pageTopic == 'Sobre') {
          this.backgroundHeader = 'dm_lilas_00'
        }

      }, 1)
    }
  }

};
</script>

<style scoped>
h1 {
  width: 200px;
  text-align: start;
}

.header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  align-items: center;
  color: #faf6f0;
  height: 75px;
  overflow: hidden;
  background-color: var(--dm_preto_00);
  padding-left: 160px;
  justify-content: space-between;
  width: calc(100% - 255px);
  white-space: nowrap;
}

.colors {
  display: flex;
  align-items: center;
  height: 75px;
  width: 400px;
  padding-right: 160px;
  padding-left: 60px;
  border-radius: 20px 0 0 45px;
}

.design__cont {
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1;
}

.design__first {
  font-weight: 500;
  font-family: "Roboto Slab", serif;

}

.design__second {

  font-size: 28px;
  font-weight: 300;
  font-family: "Roboto Slab", serif;
}

.design__sub {
  font-size: 12px;
  font-weight: 300;
  font-family: "Roboto Slab", serif;
  z-index: 1;
  position: relative;
}

.design__graf {
  position: absolute;
  height: 475px;
  left: 0;
  opacity: 0.03;
}
</style>
