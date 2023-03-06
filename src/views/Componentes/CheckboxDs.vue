<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-row class="componentsStyleContent">
        <el-col>
          <el-main>
            <div>
              <h1>/Checkbox</h1>
              <hr>
              <br>
            </div>
            <div class="cont-elements">
              <p>
                O checkbox é uma pequena caixa que pode ser clicada para
                selecionar um ou mais itens em uma lista. A caixa também indica
                os itens que estão selecionados pelo usuário. Há quatro estados
                possíveis para um checkbox: ativo, hover, clicado e bloqueado.
              </p>
              <br />
              <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                <h6>Default</h6>
                <h6>Checked</h6>
                <h6>Disabled</h6>
                <p style="margin: 20px 0;">Checkbox pode ser clicado.</p>
                <p style="margin: 20px 0;">Quando um checkbox foi acionado e a opção que ele representa se torna ativa.
                </p>
                <p style="margin: 20px 0;">Quando um checkbox não está passível de ser acionado em uma situação.</p>
                <el-checkbox v-model="checked3" label="Option 1" />
                <el-checkbox v-model="checked1" label="Option 1" checked />
                <el-checkbox v-model="checked5" label="Option 1" disabled />

                <el-checkbox v-model="checked3" label="Option 2" />
                <el-checkbox v-model="checked1" label="Option 2" checked />
                <el-checkbox v-model="checked5" label="Option 2" disabled />

                <el-checkbox v-model="checked3" label="Option 3" />
                <el-checkbox v-model="checked1" label="Option 3" checked />
                <el-checkbox v-model="checked5" label="Option 3" disabled />
              </div>
              <br />
              <br />
              <!--  -->
              <!--  -->
              <!--  -->
              <!--  -->

              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Ver código">

                  <!-- Código para copiar -->

                  <div class="html_codigos">
                    <div>&#60;<span tagColor>template</span>&#62;</div>
                    <div class="border-left">
                      <div recuo>
                        <!-- Checked -->
                        <span>&#60;<span tagColor>el-checkbox</span> v-model=<span roxo>"checked1"</span>
                          label=<span roxo>"Option 1" </span>
                          <span tagColor> checked</span>
                        </span>
                        /&#62;
                        <br />
                        <!-- Normal -->
                        <span>&#60;<span tagColor>el-checkbox</span> v-model=<span roxo>"checked1"</span>
                          label=<span roxo>"datamachina" </span>
                        </span>
                        /&#62;
                        <br />
                        <!-- disabled -->
                        <span>&#60;<span tagColor>el-checkbox</span> v-model=<span roxo>"checked1"</span>
                          label=<span roxo>"Design System"" </span>
                          <span tagColor> disabled</span>
                        </span>
                        /&#62;
                      </div>
                    </div>
                    &#60;/<span tagColor>template</span>&#62;
                  </div>
                </el-collapse-item>
              </el-collapse>
              <!--  -->
            </div>
          </el-main>
        </el-col>
      </el-row>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "CheckboxDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Check Box",
    };
  },
};
</script>