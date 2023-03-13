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
            <hr>
            <br>
          </div>
          <div class="cont-elements">
            <p>Dropdowns permitem que o usuário escolha uma opção de uma lista em um espaço pré-determinado. A opção
              selecionada fica em destaque.</p>
            <br>
            <div class="flex flex-wrap items-center">
              <div style="display: flex; justify-content: space-between; gap: 100px; margin: auto">
                <el-dropdown trigger="click" class="dm-dropdown">
                  <el-button type="dropdown">
                    Dropdown List
                    <dm-icon ArrowDown />
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>
                        <el-checkbox>checkbox 1</el-checkbox>
                      </el-dropdown-item>
                      <el-dropdown-item>
                        <el-checkbox>checkbox 2</el-checkbox>
                      </el-dropdown-item>
                      <el-dropdown-item> <dm-icon Link /> Action 3</el-dropdown-item>
                      <el-dropdown-item> <dm-icon Add />Action 4</el-dropdown-item>
                      <el-dropdown-item>Action 5</el-dropdown-item>
                      <el-dropdown-item>Action 6</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>

                <!-- disabled -->

                <el-dropdown trigger="click" class="dm-dropdown">
                  <el-button type="dropdown" disabled>
                    Dropdown List
                    <dm-icon ArrowDown />
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>Action 1</el-dropdown-item>
                      <el-drdown-item>Action 2</el-drdown-item>
                      <el-dropdown-item>Action 3</el-dropdown-item>
                      <el-dropdown-item>Action 4</el-dropdown-item>
                      <el-dropdown-item>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <div class="html_codigos">
                  &#60;<span tagColor>el-dropdown</span> trigger=<span roxo>"click"</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>el-button</span> type=<span tagColor>"dropdown"</span>&#62;

                      <div class="border-left">
                        <div recuo>
                          <span black>Dropdown List</span><br>
                          &#60;<span tagColor>dm-icon</span> <span roxo>ArrowDown</span>/&#62;
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
                <div class="html_codigos">
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
                          &#60;<span tagColor>dm-icon</span> <span roxo>ArrowDown</span>/&#62;
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
          <div class="cont-elements">
            <h3>Filtros</h3>
            <br>
            <p>Filtros permitem aos usuários visualizar conteúdos específicos e encontrar de forma mais rápida o que estão
              procurando. Nesse caso o dropdown tem dentro da sua caixa de seleção um ou mais checkboxes e botões. Quem
              segue os padrões já determinados nos componentes anteriores.</p>
            <br>
            <div style="display: flex; justify-content: center; width: 100%;"><img width="230" src="dropdown/01.svg">
            </div>
          </div>

          <div class="cont-elements">
            <h3>Placeholder com opção selecionada</h3>
            <br>
            <p>Aparece quando o usuário seleciona uma ou mais opções na caixa de seleção.</p>
            <br>
            <br>
            <div style="display: flex; gap: 30px; margin: auto;">
              <img height="17" src="dropdown/02.svg">
              <img height="17" src="dropdown/03.svg">
            </div>
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