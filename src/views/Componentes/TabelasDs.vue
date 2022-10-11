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
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="Date" width="180">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="180">
          </el-table-column>
          <el-table-column prop="address" label="Address"> </el-table-column>
        </el-table>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <br />
        <br />
        <el-button disabled>Default</el-button>
        <el-button type="primary" disabled>Primary</el-button>
        <el-button type="success" disabled>Success</el-button>
        <el-button type="info" disabled>Info</el-button>
        <el-button type="warning" disabled>Warning</el-button>
        <el-button type="danger" disabled>Danger</el-button>
        <br />
        <br />
        <div class="block">
          <span class="demonstration">Breakpoints not displayed</span>
          <el-slider v-model="value1" :step="10"> </el-slider>
        </div>
        <div class="block">
          <span class="demonstration">Breakpoints displayed</span>
          <el-slider v-model="value2" :step="10" show-stops> </el-slider>
        </div>
        <br />
        <br />
        <el-row class="header">
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
        </el-row>

        <el-row>
          <el-col :offset="1" :span="22">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="Nav selecionado" name="first"
                >Nav selecionado</el-tab-pane
              >
              <el-tab-pane label="Design System" name="second"
                >Design System</el-tab-pane
              >
              <el-tab-pane label="Data Machina" name="third"
                >Data Machina</el-tab-pane
              >
              <el-tab-pane label="Chatbot" name="fourth">Chatbot</el-tab-pane>
              <el-tab-pane label="Logística" name="cinco"
                >Logística</el-tab-pane
              >
            </el-tabs>
          </el-col>
        </el-row>
        <br />
        <br />

        <div class="block">
          <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
          </el-date-picker>
        </div>
        <div class="block">
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="Pick a day"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </div>
        <br />
        <br />
        <div class="block">
          <span class="demonstration">Default</span>
          <el-rate v-model="value1"></el-rate>
        </div>
        <div class="block">
          <span class="demonstration">Color for different levels</span>
          <el-rate v-model="value2" :colors="colors"> </el-rate>
        </div>
        <br />
        <br />

        <br />
        <el-row>
          <el-col :span="24"
            ><div class="grid-content bg-purple-dark"></div
          ></el-col>
        </el-row>
        <br />
        <el-row>
          <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="12"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
        </el-row>
        <br />
        <el-row>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="8"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <br />
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
        </el-row>
        <br />
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
        </el-row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
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
