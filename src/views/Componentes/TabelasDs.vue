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
          <el-table :data="tableData" stripe>
            <el-table-column prop="projectName" label="Projetc Name" />
            <el-table-column prop="company" label="Company " />
            <el-table-column prop="date" label="Date" />
            <el-table-column prop="tag" label="Tag">
              <template #default="scope">
                <el-tag>{{ scope.row.tag }}</el-tag>
              </template>
            </el-table-column>
          </el-table>
          <br />
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Ver" name="1">
          <div class="html_codigos_blue">
            &#60;<span tagColor>el-table</span> :data=<span roxo
              >"tableData" stripe </span
            >&#62;

            <br />
            <div class="border-left">
              <div recuo>
                &#60;<span tagColor>el-table-column</span> prop=<span roxo
                  >"projectName"</span
                >
                label=<span roxo>"Project Name"</span>
                /&#62;
                <br />
                <!--  -->
                &#60;<span tagColor>el-table-column</span> prop=<span roxo
                  >"company"</span
                >
                label=<span roxo>"Company"</span>
                /&#62;
                <br />
                <!--  -->
                &#60;<span tagColor>el-table-column</span> prop=<span roxo
                  >"date"</span
                >
                label=<span roxo>"Date"</span>
                /&#62;
                <br />
                <!--  -->
                &#60;<span tagColor>el-table-column</span> prop=<span roxo
                  >"tag"</span
                >
                label=<span roxo>"Tag"</span>
                &#62;
                <br />
                <div class="border-left">
                  <div recuo>
                    &#60;<span tagColor>template</span> #default=<span roxo
                      >"scope"</span
                    >&#62;
                    <br />
                    <div recuo>
                      &#60;<span tagColor>el-tag</span>&#62;{<!---->{<span roxo>
                        scope.row.tag </span
                      >}<!---->}&#60;/<span tagColor>el-tag</span>&#62;
                    </div>
                    &#60;/<span tagColor>template</span>&#62;
                  </div>
                </div>
                &#60;/<span tagColor>el-table-column</span>&#62;
              </div>
            </div>
            &#60;<span tagColor>/el-table</span>&#62;
            <br />
            <br />
            <!-- script -->
          </div>
          <div class="html_codigos_blue">
            <!-- Script -->
            &#60;<span tagColor>script</span>&#62;
            <br />
            <span roxo>export default</span> {
            <div class="border-left">
              <div recuo>
                data() {
                <div class="border-left">
                  <div recuo>
                    return {
                    <br />
                    <div class="border-left">
                      <div recuo>
                        <span black>tableData</span>: [
                        <div class="border-left">
                          <div recuo>
                            {
                            <div class="border-left">
                              <div recuo>
                                projectName:
                                <span black>"Design System"</span>,
                                <br />
                                company: <span black>"Data Machina"</span>,
                                <br />
                                date: <span black>"12/01/2023"</span>,
                                <br />
                                tag: <span black>"Tag 2"</span>,
                                <br />
                              </div>
                            </div>
                            },
                          </div>
                        </div>
                        ],
                      </div>
                    </div>
                    };
                  </div>
                </div>
                },
              </div>
            </div>
            };
            <br />
            &#60;/<span tagColor>script</span>&#62;
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
          projectName: "Design System",
          company: "Data Machina",
          date: "12/01/2023",
          tag: "Tag 1",
        },
        {
          projectName: "Design System",
          company: "Data Machina",
          date: "12/01/2023",
          tag: "Tag 2",
        },
        {
          projectName: "Design System",
          company: "Data Machina",
          date: "12/01/2023",
          tag: "Tag 3",
        },
        {
          projectName: "Design System",
          company: "Data Machina",
          date: "12/01/2023",
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
