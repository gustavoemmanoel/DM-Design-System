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
            <h1>/Dropdown</h1>
            <hr />
            <br />
            <p>Dropdowns permitem que o usuário escolha uma opção de uma lista em um espaço pré-determinado. A opção
              selecionada fica em destaque.</p>
          </div>
          <br />
          <div class="container-elementos">
            <div class="flex flex-wrap items-center">
              <div style="display: flex; justify-content: space-between; gap: 100px; margin: auto">
                <el-dropdown>
                  <el-button type="dropdown">
                    Dropdown List
                    <dm_icon baixo />
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>Action 1</el-dropdown-item>
                      <el-dropdown-item>Action 2</el-dropdown-item>
                      <el-dropdown-item>Action 3</el-dropdown-item>
                      <el-dropdown-item>Action 4</el-dropdown-item>
                      <el-dropdown-item>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>

                <!-- disabled -->

                <el-dropdown>
                  <el-button type="dropdown" disabled>
                    Dropdown List
                    <dm_icon baixo />
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>Action 1</el-dropdown-item>
                      <el-dropdown-item>Action 2</el-dropdown-item>
                      <el-dropdown-item>Action 3</el-dropdown-item>
                      <el-dropdown-item>Action 4</el-dropdown-item>
                      <el-dropdown-item>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>




            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="ver" name="3">
                <div class="html_codigo_blue">
                  &#60;<span tagColor>el-dropdown</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>el-button</span> type=<span tagColor>"dropdown"</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          Dropdown List
                          &#60;<span tagColor>dm_icon</span> <span roxo>baixo</span>/&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-button</span>&#62;
                    </div>
                    <div recuo>
                      &#60;<span tagColor>template</span> #dropdown&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-dropdown-menu</span>&#62;
                          <div class="border-left">
                            <div recuo>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;Action 1&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;Action 2&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;Action 3&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;Action 4&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;Action 5&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;
                            </div>
                          </div>
                          &#60;/<span tagColor>el-dropdown-menu</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>template</span>&#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>el-dropdown</span>&#62;
                </div>
                <br>
                <span green>&#60;!-- disabled --&#62;</span>
                <br>
                <br>
                <div class="html_codigo_blue">
                  &#60;<span tagColor>el-dropdown</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>el-button</span> type=<span tagColor>"dropdown"</span> <span
                        roxo>disabled</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          Dropdown List
                          &#60;<span tagColor>dm_icon</span> <span roxo>baixo</span>/&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-button</span>&#62;
                    </div>
                    <div recuo>
                      &#60;<span tagColor>template</span> #dropdown&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-dropdown-menu</span>&#62;
                          <div class="border-left">
                            <div recuo>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;Action 1&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;Action 2&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;Action 3&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;Action 4&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;Action 5&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;
                            </div>
                          </div>
                          &#60;/<span tagColor>el-dropdown-menu</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>template</span>&#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>el-dropdown</span>&#62;
                </div>

              </el-collapse-item>
            </el-collapse>

          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "DropdownDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Dropdown",

      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>