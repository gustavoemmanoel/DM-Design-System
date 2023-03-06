<template >
  <div>
    <el-col class="header mg-right-js">
      <el-col :offset="4" :span="16" class="container-ds">
        <div>
          <h1 class="cont-ds">
            <p class="first-title"><span style="color: var(--dm_azul_00)">/</span>Design System</p>
            |
            <p class="second-title">{{ headerTitle }}</p>
          </h1>
          <p class="sub-title">Designed by Data Machina</p>
        </div>
        <h1>{{ headerTitle }}</h1>
        <img class="graf" src="/grafismo.svg" />
      </el-col>
    </el-col>
  </div>
</template>
<script>
export default {
  name: "HeaderDs",

};
</script>

<style scoped>
.header {
  display: flex;
  position: fixed;
  top: 0;
  left: -256px;
  padding: 0;
  align-items: center;
  color: #faf6f0;
  height: 75px;
  overflow: hidden;
  width: 100%;
  width: 100%;
  height: 75px !important;
  overflow: hidden;
  background-color: var(--dm_preto_00);
}

.container-ds {
  display: flex;
  align-items: center;
  justify-content: space-between
}


.cont-ds {
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1;
  position: relative;
}

.first-title {
  font-weight: 500;
  font-family: "Roboto Slab", serif;

}

.second-title {
  font-size: 28px;
  font-weight: 300;
  font-family: "Roboto Slab", serif;
}

.sub-title {
  font-size: 12px;
  font-weight: 300;
  font-family: "Roboto Slab", serif;
  z-index: 1;
  position: relative;
}

.graf {
  position: absolute;
  height: 475px;
  left: 0;
  opacity: 0.03;
}
</style>
