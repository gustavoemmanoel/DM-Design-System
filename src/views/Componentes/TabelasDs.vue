<template>
  <div>
    <el-row>
      <el-col :span="24">
        <HeaderDs :headerTitle="headerTitle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><AsideComponent :btnAtivo="btnAtivo" /></el-col>
      <el-col :offset="1" :span="18">
        <br /><br />
        <!-- TABELA -->
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="Date" />
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="address" label="Address" />
          <el-table-column prop="tag" label="Tag">
            <template #default="scope">
              <el-tag>{{ scope.row.tag }}</el-tag>
            </template>
          </el-table-column>
        </el-table>
        <br />
        <!-- FIM TABELA -->

        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column prop="date" label="Date" width="180">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="180">
          </el-table-column>
          <el-table-column prop="address" label="Address"> </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "TabelasDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Tabelas",
      btnAtivo: { cores: "text-decoration: underline" },

      tableData: [
        {
          date: "Design System",
          name: "Tom",
          address: "Data Machina",
          tag: "Tag 1",
        },
        {
          date: "Design System",
          name: "Tom",
          address: "Data Machina",
          tag: "Tag 2",
        },
        {
          date: "Design System",
          name: "Tom",
          address: "Data Machina",
          tag: "Tag 3",
        },
        {
          date: "Design System",
          name: "Tom",
          address: "Data Machina",
          tag: "Tag 4",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
