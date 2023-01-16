<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <!--  -->
    <el-container>
      <el-aside>
        <AsideComponent :btnAtivo="btnAtivo" />
      </el-aside>
      <el-main>
        <div class="container-elementos"></div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  components: {
    AsideComponent,
    HeaderDs,
  },
  name: "SobreDs",
  data() {
    return {
      headerTitle: "Sobre",

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>

<style></style>
