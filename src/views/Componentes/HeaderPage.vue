<template>
  <div>
    <el-row>
      <el-col :span="24">
        <HeaderDs :headerTitle="headerTitle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <AsideComponent :btnAtivo="btnAtivo" />
      </el-col>
      <el-col :offset="1" :span="16">
        <!--  -->
        <div class="header">
          <el-row>
            <img class="img-header" src="/icons/dm.svg" />
            <h4 style="color: var(--dm_creme_00)">DataMachina</h4>
          </el-row>

          <el-row style="gap: 10px">
            <img class="icon" src="/icons/produtos.svg" />
            <img class="icon" src="/icons/duvida.svg" />
            <img class="icon" src="/icons/notificacao.svg" />
            <img class="icon" src="/icons/perfil.svg" />
          </el-row>
          <!--  -->
        </div>
        <el-row>
          <el-col :offset="1" :span="22">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="User" name="first">User</el-tab-pane>
              <el-tab-pane label="Config" name="second">Config</el-tab-pane>
              <el-tab-pane label="Role" name="third">Role</el-tab-pane>
              <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "HeaderPage",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Header",

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--dm_azul_00);
  height: 50px;
  width: 100%;
  padding: 0 16px;
}

.img-header {
  width: 35px;
  margin-right: 60px;
}
.icon {
  width: 25px;
}
</style>
