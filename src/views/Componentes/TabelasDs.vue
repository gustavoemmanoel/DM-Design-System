<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>

        <h1>/Tabelas</h1>
        <hr>
        <br>
        <div class="cont-elements">
          <p>
            As tabelas exibem uma série de dados de forma estrutura com linhas e
            colunas. As tabelas inclui uma linha de título, e linhas de conteúdo
            com detalhe zebrado (cores intercaladas) para facilitar a leitura e
            diferenciação das linhas.
          </p>
          <br />
          <!-- TABELA -->
          <el-table :data="tableData" stripe>
            <el-table-column prop="check" label="Seleção">
              <template #default="scope">
                <el-checkbox>{{ scope.row.checkbox }}</el-checkbox>
              </template>
            </el-table-column>
            <el-table-column prop="tag" label="Tag">
              <template #default="scope">
                <el-tag>{{ scope.row.tag }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="projectName" label="Projetc Name" />
            <el-table-column prop="company" label="Company " />
            <el-table-column prop="date" label="Date" />
            <el-table-column prop="tag" label="Ações">
              <template #default="scope">
                <el-row style="gap: 8px">
                  <dm-button>
                    <dm-icon Edit>{{ scope.row.edit }}</dm-icon>
                  </dm-button>
                  <dm-button>
                    <dm-icon Delete>{{ scope.row.delete }}</dm-icon>
                  </dm-button>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
          <br />

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Ver código">
              <div class="html_codigos">
                &#60;<span tagColor>el-table</span> :data=<span tagColor>"tableData"</span> stripe&#62;
                <div class="border-left">
                  <div recuo>
                    &#60;<span tagColor>el-table</span>-column prop=<span tagColor>"check"</span> label="Seleção"&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>template</span> #default=<span tagColor>"scope"</span>&#62;
                        <div class="border-left">
                          <div recuo>&#60;<span tagColor>el-checkbox</span>&#62;{<!-- -->{ <span
                              roxo>scope.row.checkbox</span> }<!-- -->}&#60;/<span tagColor>el-checkbox</span>&#62;</div>
                        </div>
                        &#60;/<span tagColor>template</span>&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>el-table</span>-column&#62;
                    &#60;<span tagColor>el-table</span>-column prop=<span roxo>"tag"</span> label=<span
                      roxo>"Tag"</span>&#62;
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>template</span> #default=<span roxo>"scope"</span>&#62;
                        <div class="border-left">
                          <div recuo>&#60;<span tagColor>el-tag</span>&#62;{<!-- -->{ <span roxo>scope.row.tag</span>
                            }<!-- -->}&#60;/<span tagColor>el-tag</span>&#62;</div>
                        </div>
                        &#60;/<span tagColor>template</span>&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>el-table-column</span>&#62; <br>
                    &#60;<span tagColor>el-table-column</span> prop=<span roxo>"projectName"</span> label=<span
                      roxo>"Projetc
                      Name"</span> /&#62;<br>
                    &#60;<span tagColor>el-table-column</span> prop=<span roxo>"company"</span> label=<span
                      roxo>"Company"</span> /&#62; <br>
                    &#60;<span tagColor>el-table-column</span> prop=<span roxo>"date"</span> label=<span
                      roxo>"Date"</span>/&#62; <br>
                    &#60;<span tagColor>el-table-column</span> prop=<span roxo>"tag"</span> label=<span
                      roxo>"Ações"</span>&#62; <br>
                    <div class="border-left">
                      <div recuo>
                        &#60;<span tagColor>template</span> #default=<span roxo>"scope"</span>&#62;<br>
                        <div class="border-left">
                          <div recuo>
                            &#60;<span tagColor>el-row</span> style=<span roxo>"gap: 8px"</span>&#62;
                            <div class="border-left">
                              <div recuo>
                                &#60;<span tagColor>dm-button</span>&#62;
                                <div recuo>&#60;<span tagColor>dm-icon</span> editar&#62;{<!-- -->{ scope.row.edit
                                  }<!-- -->}&#60;/<span tagColor>dm-icon</span>&#62;</div>
                                &#60;/<span tagColor>dm-button</span>&#62; <br>
                                &#60;<span tagColor>dm-button</span>&#62;
                                <div recuo>&#60;<span tagColor>dm-icon</span> lixeira&#62;{<!-- -->{ scope.row.delete
                                  }<!-- -->}&#60;/<span tagColor>dm-icon</span>&#62;</div>
                                &#60;/<span tagColor>dm-button</span>&#62;
                              </div>
                            </div>
                            &#60;/<span tagColor>el-row</span>&#62;
                          </div>
                        </div>
                        &#60;/<span tagColor>template</span>&#62;<br>
                      </div>
                    </div>
                    &#60;/<span tagColor>el-table-column</span>&#62;
                  </div>
                </div>
                &#60;/<span tagColor>el-table</span>&#62;

              </div>
              <br>

              <div class="html_codigos">
                <!-- Script -->
                &#60;<span tagColor>script</span>&#62;
                <br />
                <span roxo>export default</span> {
                <div class="border-left">
                  <div recuo>
                    <span yellow>data</span>() {
                    <div class="border-left">
                      <div recuo>
                        <span roxo>return</span> {
                        <br />
                        <div class="border-left">
                          <div recuo>
                            tableData: [
                            <div class="border-left">
                              <div recuo>
                                {
                                <div class="border-left">
                                  <div recuo>
                                    projectName:
                                    <span brown>"Design System"</span>,
                                    <br />
                                    company: <span brown>"Data Machina"</span>,
                                    <br />
                                    date: <span brown>"12/01/2023"</span>,
                                    <br />
                                    tag: <span brown>"Tag 1"</span>,
                                    <br />
                                  </div>
                                </div>
                                },
                              </div>
                            </div>
                            <div class="border-left">
                              <div recuo>
                                {
                                <div class="border-left">
                                  <div recuo>
                                    projectName:
                                    <span brown>"Design System"</span>,
                                    <br />
                                    company: <span brown>"Data Machina"</span>,
                                    <br />
                                    date: <span brown>"12/01/2023"</span>,
                                    <br />
                                    tag: <span brown>"Tag 2"</span>,
                                    <br />
                                  </div>
                                </div>
                                },
                              </div>
                            </div>
                            <div class="border-left">
                              <div recuo>
                                {
                                <div class="border-left">
                                  <div recuo>
                                    projectName:
                                    <span brown>"Design System"</span>,
                                    <br />
                                    company: <span brown>"Data Machina"</span>,
                                    <br />
                                    date: <span brown>"12/01/2023"</span>,
                                    <br />
                                    tag: <span brown>"Tag 3"</span>,
                                    <br />
                                  </div>
                                </div>
                                },
                              </div>
                            </div>
                            <div class="border-left">
                              <div recuo>
                                {
                                <div class="border-left">
                                  <div recuo>
                                    projectName:
                                    <span brown>"Design System"</span>,
                                    <br />
                                    company: <span brown>"Data Machina"</span>,
                                    <br />
                                    date: <span brown>"12/01/2023"</span>,
                                    <br />
                                    tag: <span brown>"Tag 4"</span>,
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
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "TabelasDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Tabelas",
      tableData: [
        {
          projectName: "Design System",
          company: "Data Machina",
          date: "12/01/2023",
          tag: "tag 1",
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