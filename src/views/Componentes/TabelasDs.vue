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
        <div>
          <h1>/Tabelas</h1>
          <div class="hr"></div>
          <p>
            As tabelas exibem uma série de dados de forma estrutura com linhas e
            colunas. As tabelas inclui uma linha de título, e linhas de conteúdo
            com detalhe zebrado (cores intercaladas) para facilitar a leitura e
            diferenciação das linhas.
          </p>
          <br />
        </div>
        <div class="container-elementos">
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
        </div>
        <div class="container-elementos">
          <!-- FIM TABELA -->
          <el-table :data="tableData" style="width: 100%" stripe>
            <el-table-column prop="date" label="Date" width="180">
            </el-table-column>
            <el-table-column prop="name" label="Name" width="180">
            </el-table-column>
            <el-table-column prop="address" label="Address"> </el-table-column>
          </el-table>
          <br />
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Consistency" name="1">
              <div>
                Consistent with real life: in line with the process and logic of
                real life, and comply with languages and habits that the users
                are used to;
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="container-elementos">
          <h4>Basic table is just for data display.</h4>
          <br />

          <p>
            After setting attribute data of el-table with an object array, you
            can use prop (corresponding to a key of the object in data array) in
            el-table-column to insert data to table columns, and set the
            attribute label to define the column name. You can also use the
            attribute width to define the width of columns.
          </p>
          <br />
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </el-table>

          <br />

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Consistency" name="1">
              <div style="margin-left: 16px; color: #3375b9">
                &#60;template&#62;
                <div class="recuo">
                  &#60;el-table&#62;
                  <div class="recuo">
                    <el-row>
                      &lt;el-table-column&nbsp;
                      <p class="html_color_axx">prop</p>
                      ="date"&nbsp;
                      <p class="html_color_axx">label</p>
                      ="Date" &nbsp;
                      <p class="html_color_axx">width</p>
                      ="180" /&gt;
                    </el-row>
                    <el-row>
                      &lt;el-table-column&nbsp;
                      <p class="html_color_axx">prop</p>
                      ="name"&nbsp;
                      <p class="html_color_axx">label</p>
                      ="Name" &nbsp;
                      <p class="html_color_axx">width</p>
                      ="180" /&gt;
                    </el-row>
                    <el-row>
                      &lt;el-table-column&nbsp;
                      <p class="html_color_axx">prop</p>
                      ="address"&nbsp;
                      <p class="html_color_axx">label</p>
                      ="Address" &nbsp;
                      <p class="html_color_axx">width</p>
                      ="180" /&gt;
                    </el-row>
                  </div>
                  &#60;/el-table&#62;
                </div>
                &#60;/template&#62;
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-main>
    </el-container>
  </el-container>
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
