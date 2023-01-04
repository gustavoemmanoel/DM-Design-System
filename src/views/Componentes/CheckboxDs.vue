<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-aside>
        <AsideComponent :btnAtivo="btnAtivo" />
      </el-aside>
      <el-row class="componentsStyleContent">
        <el-col>
          <el-main>
            <div>
              <h1>/Checkbox</h1>
              <div class="hr"></div>
              <br />
              <p>
                O checkbox é uma pequena caixa que pode ser clicada para
                selecionar um ou mais itens em uma lista. A caixa também indica
                os itens que estão selecionados pelo usuário. Há quatro estados
                possíveis para um checkbox: ativo, hover, clicado e bloqueado.
              </p>
              <br />
            </div>
            <div class="container-elementos">
              <el-checkbox v-model="checked1" label="Option 1" checked />
              <el-checkbox v-model="checked3" label="datamachina" />
              <el-checkbox v-model="checked5" label="Design System" disabled />
              <br />
              <br />
              <!--  -->
              <!--  -->
              <!--  -->
              <!--  -->

              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Ver" name="1">
       
                  <!-- Código para copiar -->

                  <div class="html_codigos_blue">
                    <div>&#60;<span tagColor>template</span>&#62;</div>
                    <div class="border-left">
                      <div recuo>
                        <!-- Checked -->
                        <span
                          >&#60;<span tagColor>el-checkbox</span> v-model=<span
                            roxo
                            >"checked1"</span
                          >
                          label=<span roxo>"Option 1" </span>
                          <span tagColor> checked</span>
                        </span>
                        /&#62;
                        <br />
                        <!-- Normal -->
                        <span
                          >&#60;<span tagColor>el-checkbox</span> v-model=<span
                            roxo
                            >"checked1"</span
                          >
                          label=<span roxo>"datamachina" </span>
                        </span>
                        /&#62;
                        <br />
                        <!-- disabled -->
                        <span
                          >&#60;<span tagColor>el-checkbox</span> v-model=<span
                            roxo
                            >"checked1"</span
                          >
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
import AsideComponent from "../ElementsDs/AsideComponent.vue";
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "CheckboxDs",
  components: {
    AsideComponent,
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Check Box",
      btnAtivo: { cores: "text-decoration: underline" },
    };
  },
};
</script>

<style scoped></style>
