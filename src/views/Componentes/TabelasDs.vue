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
          <br />
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

          <br />

          <div class="html_codigos_blue">
            &#60;<span tagColor>el-table</span>&#62;

            <br />
            <div recuo>
              &#60;<span tagColor>el-table-colum</span> prop=<span roxo
                >"date"</span
              >
              label=<span roxo>"Date"</span> width=<span roxo>"180"</span>
              /&#62;
              <br />
              <!--  -->
              &#60;<span tagColor>el-table-colum</span> prop=<span roxo
                >"date"</span
              >
              label=<span roxo>"Date"</span> width=<span roxo>"180"</span>
              /&#62;

              <br />
              <!--  -->
              &#60;<span tagColor>el-table-colum</span> prop=<span roxo
                >"date"</span
              >
              label=<span roxo>"Date"</span> width=<span roxo>"180"</span>
              &#62;
              <br />

              <div class="border-left">
                <div recuo>
                  &#60;<span tagColor>template</span> #default=<span roxo
                    >"scope"</span
                  >&#62;
                  <br />
                  <div recuo>
                    &#60;<span tagColor>el-tag</span>&#62;{<!---->{<span roxo
                      >scope.row.tag</span
                    >}<!---->}&#60;/<span tagColor>el-tag</span>&#62;
                  </div>
                  &#60;/<span tagColor>template</span>&#62;
                </div>
              </div>

              &#60;/<span tagColor>el-table-colum</span>&#62;
            </div>
            &#60;<span tagColor>/el-table</span>&#62;
            <br />
            <br />
            <!-- script -->
            <div class="html_codigos_blue">
              <!-- Script -->
              &#60;<span tagColor>script</span>&#62;
              <div recuo>
                <span roxo>export default</span> {
                <div recuo>
                  <div recuo>
                    data() {
                    <br />
                    <div recuo>
                      return {
                      <br />
                      <div recuo>mateus: 'Mateus Durães dos Santos'</div>

                      <div recuo>};</div>
                      },
                    </div>
                  </div>
                  <span>};</span>
                </div>
              </div>
              &#60;/<span tagColor>script</span>&#62;
              <!--  -->
            </div>
          </div>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Ver" name="1">.... </el-collapse-item>
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
