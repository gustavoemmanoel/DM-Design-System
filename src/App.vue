<template>
  <div>
    <el-row>
      <el-col :span="24" class="header">
        <div>
          <div
            style="
              display: flex;
              align-items: center;
              gap: 10px;
              font-size: 28px;
            "
          >
            <p class="fisrt-title">Design System</p>
            |
            <p class="second-title">Princípios</p>
          </div>
          <p class="sub-title">Designed by Data Machina</p>
        </div>
        <p class="principal">Princípios</p>
        <img class="graf" src="/grafismo.svg" />
      </el-col>
    </el-row>

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
  background: #fdfbf9;
  padding-top: 75px;
}

.header {
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #2c2c2c;
  color: #faf6f0;
  height: 75px;
  overflow: hidden;
  width: 100%;
  z-index: 100;
}

.fisrt-title {
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
  opacity: 0.1;
}
</style>