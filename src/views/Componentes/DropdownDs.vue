<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
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
              <el-collapse-item title="ver código" name="3">
                <div class="html_codigos_blue">
                  &#60;<span tagColor>el-dropdown</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>el-button</span> type=<span tagColor>"dropdown"</span>&#62;

                      <div class="border-left">
                        <div recuo>
                          <span black>Dropdown List</span><br>
                          &#60;<span tagColor>dm_icon</span> <span roxo>baixo</span>/&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-button</span>&#62;
                    </div>
                    <br>
                    <div recuo>
                      &#60;<span tagColor>template</span> #dropdown&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-dropdown-menu</span>&#62;
                          <div class="border-left">
                            <div recuo>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;<span black>Action 1</span>&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;<span black>Action 2</span>&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;<span black>Action 3</span>&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;<span black>Action 4</span>&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;<span black>Action 5</span>&#60;/<span
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
                  <br>
                </div>
                <div class="html_codigos_blue">
                  <br>
                  <span green>&#60;!-- disabled --&#62;</span>
                  <br>
                  <br>
                  &#60;<span tagColor>el-dropdown</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>el-button</span> type=<span tagColor>"dropdown"</span> <span
                        roxo>disabled</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          <span black>Dropdown List</span> <br>
                          &#60;<span tagColor>dm_icon</span> <span roxo>baixo</span>/&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-button</span>&#62;
                    </div> <br>

                    <div recuo>
                      &#60;<span tagColor>template</span> #dropdown&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-dropdown-menu</span>&#62;
                          <div class="border-left">
                            <div recuo>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;<span black>Action 1</span>&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;<span black>Action 2</span>&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;<span black>Action 3</span>&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;<span black>Action 4</span>&#60;/<span
                                tagColor>el-dropdown-item</span>&#62;<br>
                              &#60;<span tagColor>el-dropdown-item</span>&#62;<span black>Action 5</span>&#60;/<span
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
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "DropdownDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Dropdown",
    };
  },
};
</script>