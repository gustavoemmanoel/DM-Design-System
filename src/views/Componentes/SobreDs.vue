<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <!--  -->
    <el-container>

      <el-main>
        <div class="container-elementos"></div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";
export default {
  components: {
    HeaderDs,
  },
  name: "SobreDs",
  data() {
    return {
      headerTitle: "Sobre",
    };
  },
};
</script>

<style></style>
