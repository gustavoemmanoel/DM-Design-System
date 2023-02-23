<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <div>
          <h1>/Campo de texto</h1>
          <hr />
          <br />
          <p>
            Os campos de texto são um dos formatos de entrada de dados
            possíveis.
          </p>
        </div>
        <br />
        <div class="containerInterno">
          <div class="container-elementos">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form :label-position="labelPosition" :model="formLabelAlign">
                  <el-form-item label="Rua">
                    <el-input v-model="formLabelAlign.street" placeholder="Digite"></el-input>
                  </el-form-item>

                  <el-form-item label="Bairro">
                    <el-input v-model="formLabelAlign.district" placeholder="Digite"></el-input>
                  </el-form-item>

                  <el-form-item label="Número">
                    <el-input v-model="formLabelAlign.number" placeholder="Digite"></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col :span="12">
                <el-form :label-position="labelPosition" :model="formLabelAlign">
                  <el-form-item label="CEP">
                    <el-input v-model="formLabelAlign.cep" placeholder="Digite"></el-input>
                  </el-form-item>
                  <el-form-item label="Complemento">
                    <el-input v-model="formLabelAlign.complement" placeholder="Digite"></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="ver" name="3">
                <div class="html_codigos_blue">
                  &#60;<span tagColor>el-form</span> :label-position=<span roxo>"labelPosition"</span>
                  label-width=<span roxo>"100px"</span> :model=<span roxo>"formLabelAlign"</span>&#62;
                  <div class="border-left">
                    <!-- Rua -->
                    <div recuo>
                      &#60;<span tagColor>el-form-item</span> label=<span roxo>"Rua"</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-input</span> v-model=<span roxo>"formLabelAlign.street"</span>
                          placeholder=<span roxo>"Digite"</span>&#62;
                          &#60;/<span tagColor>el-input</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form-item</span>&#62;
                    </div>
                    <br />
                    <!-- Bairro -->
                    <div recuo>
                      &#60;<span tagColor>el-form-item</span> label=<span roxo>"Bairro"</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-input</span> v-model=<span roxo>"formLabelAlign.district"</span>
                          placeholder=<span roxo>"Digite"</span>&#62;
                          &#60;/<span tagColor>el-input</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form-item</span>&#62;
                    </div>
                    <br />
                    <!-- Número -->
                    <div recuo>
                      &#60;<span tagColor>el-form-item</span> label=<span roxo>"Número"</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-input</span> v-model=<span roxo>"formLabelAlign.number"</span>
                          placeholder=<span roxo>"Digite"</span>&#62;
                          &#60;/<span tagColor>el-input</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form-item</span>&#62;
                    </div>
                    <br />
                    <!-- CEP -->
                    <div recuo>
                      &#60;<span tagColor>el-form-item</span> label=<span roxo>"CEP"</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-input</span> v-model=<span roxo>"formLabelAlign.cep"</span>
                          placeholder=<span roxo>"Digite"</span>&#62;
                          &#60;/<span tagColor>el-input</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form-item</span>&#62;
                    </div>
                    <br />
                    <!-- Complemento -->
                    <div recuo>
                      &#60;<span tagColor>el-form-item</span> label=<span roxo>"Complemento"</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-input</span> v-model=<span roxo>"formLabelAlign.complement"</span>
                          placeholder=<span roxo>"Digite"</span>&#62;
                          &#60;/<span tagColor>el-input</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form-item</span>&#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>el-form</span>&#62;
                </div>

                <br />
                <br />
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
                              <span black>formLabelAlign</span>: {
                              <div class="border-left">
                                <div recuo>
                                  street:
                                  <span black>null</span>,
                                  <br />
                                  district: <span black>null</span>,
                                  <br />
                                  number: <span black>null</span>,
                                  <br />
                                  cep: <span black>null</span>,
                                  <br />
                                  complement: <span black>null</span>,
                                  <br />
                                </div>
                              </div>
                              },
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
        </div>

        <!--  -->
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";

export default {
  name: "CampoTextoDs",
  components: {
    HeaderDs,
  },
  data() {
    return {
      headerTitle: "Campo de Texto",
      btnAtivo: { cores: "text-decoration: underline" },
      labelPosition: "top",

      formLabelAlign: {
        street: "",
        district: "",
        number: null,
        cep: "",
        complement: "",
      },
    };
  },
};
</script>
