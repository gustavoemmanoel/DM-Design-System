<template>
   <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-aside>
        <AsideComponent :btnAtivo="btnAtivo" />
      </el-aside>

      <el-main>
        <div class="containerInterno">
          <div>
            <h1>/Tags</h1>
            <div class="hr"></div>
            <p>
              Pins são elementos que servem para marcar pontos no mapa.
            </p>
          </div>
          <br />
          <div class="container-elementos">
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "IconografiaDs",
};
</script>

<style scoped>
</style>