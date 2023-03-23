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
          <br>
        </div>
        <div class="containerInterno">
          <div class="cont-elements">
            <p>
              Os campos de texto são um dos formatos de entrada de dados
              possíveis.
            </p>
            <br>

            <el-row :gutter="40">
              <el-col :span="8">
                <h6>Default</h6>
                <br>

                <el-form :label-position="labelPosition" :model="formLabelAlign" :rules="rules" ref="ruleForm">
                  <el-form-item label="Rua" prop="street">
                    <el-input v-model="formLabelAlign.street" placeholder="Digite"></el-input>
                  </el-form-item>
                  <el-form-item label="Número" prop="number">
                    <el-input v-model="formLabelAlign.number" placeholder="Digite"></el-input>
                  </el-form-item>
                </el-form>

              </el-col>
              <el-col :span="8">
                <h6>Disabled</h6>
                <br>
                <el-form :label-position="labelPosition" :model="formLabelAlign" disabled>
                  <el-form-item label="Bairro">
                    <el-input v-model="formLabelAlign.visualizacao1" placeholder="Dado para visualização"></el-input>
                  </el-form-item>
                  <el-form-item label="Estado">
                    <el-input v-model="formLabelAlign.visualizacao2" placeholder="Dado para visualização"></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col :span="8">
                <h6>Reading disabled </h6>
                <br>
                <el-form :label-position="labelPosition" :model="formLabelAlign" reading disabled>
                  <el-form-item label="Contato">
                    <el-input v-model="formLabelAlign.visualizacao1" placeholder="Dado para visualização"></el-input>
                  </el-form-item>
                  <el-form-item label="Complemento">
                    <el-input v-model="formLabelAlign.visualizacao2" placeholder="Dado para visualização"></el-input>
                  </el-form-item>
                </el-form>

              </el-col>
            </el-row>
            <br>

            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Ver código">
                <div class="html_codigos">
                  &#60;<span tagColor>template</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>el-form</span> :label-position=<span roxo>"labelPosition" </span>:model=<span
                        roxo>"formLabelAlign"</span> :rules=<span roxo>"rules"</span> ref=<span
                        roxo>"ruleForm"</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-form-item</span> label=<span roxo>"Rua"</span> prop=<span
                            roxo>"street"</span>&#62;
                          <div class="border-left">
                            <div recuo>&#60;<span tagColor>el-input</span> v-model=<span
                                roxo>"formLabelAlign.street"</span>
                              placeholder=<span roxo>"Digite"</span>&#62;&#60;/<span tagColor>el-input</span>&#62;</div>
                          </div>
                          &#60;/<span tagColor>el-form-item</span>&#62; <br>
                          &#60;<span tagColor>el-form-item</span> label=<span roxo>"Número"</span> prop=<span
                            roxo>"number"</span>&#62;
                          <div class="border-left">
                            <div recuo>&#60;<span tagColor>el-input</span> v-model=<span
                                roxo>"formLabelAlign.number"</span>
                              placeholder=<span roxo>"Digite"</span>&#62;&#60;/<span tagColor>el-input</span>&#62;</div>
                          </div>
                          &#60;/<span tagColor>el-form-item</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form</span>&#62;
                    </div>
                    <br>

                    <div recuo>
                      <span green>/* disabled */</span>
                      <br>
                      <br>
                      &#60;<span tagColor>el-form</span> :label-position=<span roxo>"labelPosition"</span> :model=<span
                        roxo>"formLabelAlign"</span> disabled&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-form-item</span> label=<span roxo>"Bairro"</span>&#62;
                          <div class="border-left">
                            <div recuo>&#60;<span tagColor>el-input</span> v-model=<span
                                roxo>"formLabelAlign.visualizacao1"</span>
                              placeholder=<span roxo>"Dado para visualização"</span>&#62;&#60;/<span
                                tagColor>el-input</span>&#62;</div>
                          </div>
                          &#60;/<span tagColor>el-form-item</span>&#62; <br>
                          &#60;<span tagColor>el-form-item</span> label=<span roxo>"Estado"</span>&#62;
                          <div class="border-left">
                            <div recuo>&#60;<span tagColor>el-input</span> v-model=<span
                                roxo>"formLabelAlign.visualizacao2"</span>
                              placeholder=<span roxo>"Dado para visualização"</span>&#62;&#60;/<span
                                tagColor>el-input</span>&#62;</div>
                          </div>
                          &#60;/<span tagColor>el-form-item</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form</span>&#62;
                    </div>

                    <br>
                    <div recuo>
                      <span green>/* reading disabled */</span>
                      <br>
                      <br>
                      &#60;<span tagColor>el-form</span> :label-position=<span roxo>"labelPosition" </span>:model=<span
                        roxo>"formLabelAlign"</span> reading disabled&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-form-item</span> label="Contato"&#62;
                          <div class="border-left">
                            <div recuo>&#60;<span tagColor>el-input</span> v-model=<span
                                roxo>"formLabelAlign.visualizacao1"</span>
                              placeholder=<span roxo>"Dado para visualização"</span>&#62;&#60;/<span
                                tagColor>el-input</span>&#62;</div>
                          </div>
                          &#60;/<span tagColor>el-form-item</span>&#62; <br>
                          &#60;<span tagColor>el-form-item</span> label="Complemento"&#62;
                          <div class="border-left">
                            <div recuo>&#60;<span tagColor>el-input</span> v-model=<span
                                roxo>"formLabelAlign.visualizacao2"</span>
                              placeholder=<span roxo>"Dado para visualização"</span>&#62;&#60;/<span
                                tagColor>el-input</span>&#62;</div>
                          </div>
                          &#60;/<span tagColor>el-form-item</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form</span>&#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>template</span>&#62;
                </div>

                <br />
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
                          var checkAge = (<span blue>rule, value, callback</span>) => {
                          <div class="border-left">
                            <div recuo>
                              <span roxo>if</span> (!<span blue>value</span>) {
                              <div class="border-left">
                                <div recuo><span roxo>return</span> <span yellow>callback</span>(new Error(<span
                                    brown>'Please
                                    input the age'</span>));</div>
                              </div>
                              }
                              <span yellow>setTimeout</span>(() => {
                              <div class="border-left">
                                <div recuo>
                                  <span roxo>if</span> (!Number.isInteger(<span blue>value</span>)) {
                                  <div class="border-left">
                                    <div recuo><span yellow>callback</span>(new Error(<span brown>'Please input
                                        digits'</span>));</div>
                                  </div>
                                  } <span roxo>else</span> {
                                  <div class="border-left">
                                    <div recuo>
                                      <span roxo>if</span> (value &#60; <span green>18</span>) {
                                      <div class="border-left">
                                        <div recuo><span yellow>callback</span>(new Error(<span brown>'Age must be greater
                                            than 18'</span>));</div>
                                      </div>
                                      } <span roxo>else</span> {
                                      <div class="border-left">
                                        <div recuo><span yellow>callback</span>();</div>
                                      </div>
                                      }
                                    </div>
                                  </div>
                                  }
                                </div>
                              </div>
                              }, <span green>1000</span>);
                            </div>
                          </div>
                          };
                          <br>
                          <span blue>var</span> validatePass = (<span blue>rule, value, callback</span>) => {
                          <div class="border-left">
                            <div recuo>
                              <span roxo>if</span> (value === <span brown>''</span>) {
                              <div class="border-left">
                                <div recuo><span yellow>callback</span>(new Error(<span brown>'Please input the
                                    password'</span>));</div>
                              </div>
                              } <span roxo>else</span> {
                              <div class="border-left">
                                <div recuo>
                                  <span roxo>if</span> (this.ruleForm.checkPass !== <span brown>''</span>) {
                                  <div class="border-left">
                                    <div recuo>this.$refs.ruleForm.validateField('checkPass');</div>
                                  </div>
                                  } <span yellow>callback</span>();
                                </div>
                              </div>
                              }
                            </div>
                          </div>
                          };
                        </div>

                        <div recuo>
                          <span roxo>return</span> {
                          <br />
                          <div class="border-left">
                            <div recuo>
                              labelPosition: <span brown>"top"</span>, <br>
                              formLabelAlign: {
                              <div class="border-left">
                                <div recuo>
                                  street:
                                  <span brown>""</span>,
                                  <br />
                                  number: <span brown>""</span>,
                                  <br />
                                </div>
                              </div>
                              },
                              <br>
                              <!--  -->
                              rules: {
                              <div class="border-left">
                                <div recuo>
                                  street: [
                                  <div class="border-left">
                                    <div recuo>{ <span yellow>validator</span>: <span yellow>validatePass</span>, trigger:
                                      <span brown>'blur'</span> }
                                    </div>
                                  </div>
                                  ],<br>
                                  number: [
                                  <div class="border-left">
                                    <div recuo>{ <span yellow>validator</span>: <span yellow>checkAge</span>,
                                      trigger:<span brown> 'blur'</span> }</div>
                                  </div>
                                  ]
                                </div>
                              </div>
                              },
                            </div>
                          </div>
                          };
                        </div>
                      </div>
                      },
                      <br>

                      <!--  -->
                      methods: {

                      <div class="border-left">
                        <div recuo>
                          <span yellow>submitForm</span>(<span blue2>formName</span>) {
                          <br>
                          <div class="border-left">
                            <div recuo>
                              <span blue>this</span>.$refs[<span blue2>formName</span>].<span
                                yellow>validate</span>((<span blue2>valid</span>) =&#62;
                              {
                              <div class="border-left">
                                <div recuo>
                                  <span roxo>if</span> (<span blue2>valid</span>) {
                                  <div class="border-left">
                                    <div recuo><span yellow>alert</span>(<span brown>'submit!'</span>);</div>
                                  </div>
                                  } <span roxo>else</span> {
                                  <div class="border-left">
                                    <div recuo>
                                      console.<span yellow>log</span>(<span brown>'error submit!!'</span>);<br>
                                      <span roxo>return</span> <span blue>false</span>;
                                    </div>
                                  </div>
                                  }
                                </div>
                              </div>
                              });
                            </div>
                          </div>
                          },
                        </div>
                      </div>
                      }
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

        <div class="cont-elements">
          <h3>Estados</h3>
          <br>
          <p>As caixas podem se comportar de formas diferentes para dar feedbacks ao usuário quanto ao seu uso, por
            exemplo quando está ativada ou desativada.</p>
          <div class="grid-inputs-svg">

            <div>
              <span>
                <h6>Padrão</h6>
                <br>
                <p>Estado de caixa disponível para digitação mas não selecionada.</p>
              </span>
              <br>
              <img style="width: 100%;" src="mensagens/input_01.svg">
            </div>

            <div>
              <span>
                <h6>Foco</h6>
                <br>
                <p>Estado de caixa onde o usuário está digitando.</p>
                <br>
              </span>
              <img style="width: 100%;" src="mensagens/input_02.svg">
            </div>

            <div>
              <span>
                <h6>Desabilitado</h6>
                <br>
                <p>Estado de caixa que não pode ser acessada ou modificada por aquele usuário.</p>
              </span>
              <br>
              <img style="width: 100%;" src="mensagens/input_03.svg">
            </div>
          </div>
          <!--  -->
          <hr class="hr">
          <div class="grid-inputs-svg">
            <div>
              <span>
                <h6>Leitura</h6>
                <br>
                <p>Estado de caixa protegida de edição. Mas possível de ser habilitada para editar.</p>
              </span>
              <br>
              <span><img style="width: 100%;" src="mensagens/input_04.svg">
                <br>
                <br>
              </span>
            </div>
            <div>
              <span>
                <h6>Erro</h6>
                <br>
                <p>Caixa de texto com informação incorreta ou incompatível com o formato esperado.</p>
              </span>
              <br>
              <img style="width: 100%;" src="mensagens/input_05.svg">
            </div>
            <div>
              <span>
                <h6>Certo</h6>
                <br>
                <p>Caixa de texto com informação correta após validação de formato/conteúdo.</p>
              </span>
              <br>
              <span><img style="width: 100%;" src="mensagens/input_06.svg"> </span>
            </div>
          </div>

          <br>
        </div>

        <div class="cont-elements">
          <h3>Comportamento Extra</h3>
          <br>
          <p>Há quebras possíveis quando o texto for maior que a caixa de texto, ou quando o texto do título e descrição
            também forem maiores que o espaço destinado.</p>
          <br>
          <br>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">

            <div>
              <h6>Texto excede tamanho do campo </h6>
              <br>
              <p>Utilizar reticências substituindo o último dígito possível na largura da caixa de texto. Ao passar o
                mouse (hover) um balão mostra o texto completo.
              </p>
              <br>
              <br>
              <div style="display: flex;flex-direction: column;align-items: center; gap: 40px;">
                <img style="width: 53%;" src="mensagens/input_07.svg">
                <img style="width: 62%;" src="mensagens/input_09.svg">
              </div>
            </div>

            <div>

              <h6>Texto de descrição/erro excede tamanho do campo</h6>
              <br>
              <p>Quebrar o texto para criar uma segunda linha. Largura limite de cada linha acompanha a largura da caixa
                de texto.
              </p>
              <br>
              <br>
              <img style="width: 53%;" src="mensagens/input_08.svg">

            </div>
            <br>
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

    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the age'));
      } setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'));
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        } callback();
      }
    };
    return {
      headerTitle: "Campo de Texto",
      labelPosition: "top",
      formLabelAlign: {
        street: "",
        number: "",
      },
      rules: {
        street: [
          { validator: validatePass, trigger: 'blur' }
        ],
        number: [
          { validator: checkAge, trigger: 'blur' }
        ]
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
};
</script>

<style scoped>
.hr {
  border-color: var(--dm_cinza_03);
  margin: 40px 0 70px 0;
}

.grid-inputs-svg {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;
  margin-top: 40px;
  padding-bottom: 30px;
}

.grid-inputs-svg div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 193px;

}</style>