<template >
  <div>
    <el-col class="header mg-right-js">
      <el-col :offset="4" :span="16" class="container-ds">
        <div>
          <div class="cont-ds">
            <p class="first-title">Design System</p>
            |
            <p class="second-title">{{ headerTitle }}</p>
          </div>
          <p class="sub-title">Designed by Data Machina</p>
        </div>
        <div class="align_right">
          <p class="principal">{{ headerTitle }}</p>
        </div>
        <img class="graf" src="/grafismo.svg" />
      </el-col>
    </el-col>
  </div>
</template>
<script>
export default {
  name: "HeaderDs",
  props: {
    headerTitle: String,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  color: #faf6f0;
  height: 75px;
  overflow: hidden;
  width: 100%;
  background-color: var(--dm_preto_00);

  position: fixed;
  width: 100%;
  padding: 0 ;
  height: 75px !important;
  overflow: hidden;
  left: 0;


}




.container-ds {
  display: flex;
  align-items: center;
}

.align_right {
  margin-left: auto;
}

.cont-ds {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 28px;
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
}

.principal {
  font-size: 30px;
  font-weight: 500;
  font-family: "Roboto Slab", serif;
}

.graf {
  position: absolute;
  height: 475px;
  left: 0;
  opacity: 0.03;
}
</style>
